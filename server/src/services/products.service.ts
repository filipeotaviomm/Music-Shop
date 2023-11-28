import {
  ProductCreate,
  ProductUpdate,
  ProductBrute,
  ProductReturn,
  ReadProduct,
  ReadProductByCategory,
} from "../interfaces/products.interface";
import { prisma } from "../app";
import { Product } from "@prisma/client";


import { BrandList } from "../interfaces/brands.interface";
import { CategoryList } from "../interfaces/categories.interface";
import { Pagination } from "../interfaces/pagination.interface";

export const createProductService = async (
  data: ProductCreate,
  userId: number,
): Promise<Product> => {
  const { categories } = data;
  const product: Product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      brand: {
        connectOrCreate: {
          where: { name: data.brandName },
          create: { name: data.brandName },
        },
      },
      price: data.price,
      image: data.image,
      stock: data.stock,
      color: data.color,
      condition: data.condition,
      owner: { connect: { id: userId } },
      categories: {
        create: categories?.map((categoryName) => ({
          category: {
            connectOrCreate: {
              where: { name: categoryName },
              create: { name: categoryName },
            },
          },
        })),
      },
    },
    include: {
      categories: { select: { category: true } },
      owner: { select: { name: true } },
    },
  });
  return product;
};

export const getAllProductsService = async ({ page, perPage, nextPage, order, sort, prevPage }: Pagination): Promise<ReadProduct> => {
  const paginationProducts = await prisma.product.findMany({
    orderBy: { [sort]: order },
    skip: page,
    take: perPage,
    include: { 
      categories: { select: { category: true } },
      owner: { select: { name: true } }
    },
  });

  const productsCount = await prisma.product.findMany();

  // const productsWithCategories = paginationProducts.map((product) => ({
  //   ...product,
  //   categories: product.categories.map((category) => category.category.name),
  // }));

  return {
    products: paginationProducts, 
    prevPage: page >= 1 ? prevPage : null, 
    nextPage: productsCount.length - page <= perPage ? null : nextPage
  };
};

export const getAllProductsIdService = async (
  userId: number,
): Promise<Product[]> => {
  const allProducts: Product[] = await prisma.product.findMany({
    where: { ownerId: userId },
    include: {
      categories: { select: { category: true } },
      owner: { select: { name: true } },
    },
  });

  return allProducts;
};

export const updateProductService = async (
  id: number,
  data: ProductUpdate,
): Promise<Product> => {
  const { categories } = data;

  if (categories) {
    await prisma.product.update({
      where: { id },
      data: {
        categories: { deleteMany: {} },
      },
    });
  }

  const newProduct: Product = await prisma.product.update({
    where: { id },
    data: {
      ...data,
      categories: {
        create: categories?.map((categoryName) => ({
          category: {
            connectOrCreate: {
              where: { name: categoryName },
              create: { name: categoryName },
            },
          },
        })),
      },
    },
    include: {
      categories: { select: { category: { select: { name: true } } } },
      owner: { select: { name: true } },
    },
  });

  return newProduct;
};


export const formatProductReturn = (product: any) => {
  const formatedProduct: ProductReturn = {
    ...product,
    categories: product.categories.map(
      (category: any) => category.category.name,
    ),
  };

  return formatedProduct;
};

export const deleteProductService = async (id: number): Promise<void> => {
  await prisma.product.delete({ where: { id } });
};

export const getAllBrandsService = async (): Promise<BrandList> => {
  return prisma.brand.findMany();
}

export const getAllCategoriesService = async (): Promise<CategoryList> => {
  return prisma.category.findMany();
}

export const formatProductsReturn = (products: any) => {
  const formatedProducts: ProductReturn[] = products.map(
    (product: ProductBrute) => ({
      ...product,
      categories: product.categories.map(
        (category: any) => category.category.name,
      ),
    }),
  );

  return formatedProducts;
};

export const getProductsByCategoryService = async (categoryName: string, { page, perPage, nextPage, order, sort, prevPage }: Pagination): Promise<ReadProductByCategory> => {
  const productsList = await prisma.productCategory.findMany({
    where: { category: { name: categoryName } },
    include: { product: true },
    skip: page,
    take: perPage
  });

  const productsCount = await prisma.productCategory.findMany({
    where: {
      category: { name: categoryName }
    }
  });

  return {
    products: productsList,
    prevPage: page >= 1 ? prevPage : null, 
    nextPage: productsCount.length - page <= perPage ? null : nextPage
  };
}

export const getProductsByBrandService = async (brandName: string, { page, perPage, nextPage, order, sort, prevPage }: Pagination) => {
  const productsList = await prisma.product.findMany({
    where: { brandName },
    skip: page,
    take: perPage,
    orderBy: { [sort]: order }
  });

  const productsCount = await prisma.product.findMany({
    where: { brandName }
  });

  return {
    products: productsList,
    prevPage: page >= 1 ? prevPage : null,
    nextPage: productsCount.length - page <= perPage ? null : nextPage
  };
}

export const searchProductInfoService = async (productInfo: string) => {
  const productsList = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: productInfo } },
        { color: { contains: productInfo } },
        { brandName: { contains: productInfo } },
        { description: { contains: productInfo } },
      ]
    }
  });

  return productsList;
}