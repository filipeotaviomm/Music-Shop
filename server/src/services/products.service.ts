import { Product } from "@prisma/client";
import { ProductCreate, ProductUpdate } from "../interfaces/products.interface";
import { prisma } from "../app";
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
    include: { categories: { select: { category: true } } },
  });

  return product;
};

export const getAllProductsService = async ({ page, perPage, nextPage, order, sort, prevPage }: Pagination) => {
  const paginationProducts = await prisma.product.findMany({
    orderBy: { [sort]: order },
    skip: page,
    take: perPage,
    include: { categories: { select: { category: true } } },
  });

  const productsCount = await prisma.product.findMany();

  const productsWithCategories = paginationProducts.map((product) => ({
    ...product,
    categories: product.categories.map((category) => category.category.name),
  }));

  console.log({
    products: productsWithCategories, 
    prevPage: page > 1 ? prevPage : null, 
    nextPage: productsCount.length - page <= perPage ? null : nextPage
  });
  

  return {
    products: productsWithCategories, 
    prevPage: page > 1 ? prevPage : null, 
    nextPage: productsCount.length - page <= perPage ? null : nextPage
  };
};

export const getAllProductsIdService = async (
  userId: number,
): Promise<Product[]> => {
  const allProducts = await prisma.product.findMany({
    where: { ownerId: userId },
    include: { categories: { select: { category: true } } },
  });

  const productsWithCategories = allProducts.map((product) => ({
    ...product,
    categories: product.categories.map((category) => category.category.name),
  }));

  return productsWithCategories;
};
//
// export const getAllProductsService = async (): Promise<Product[]> => {
//   const allProducts = await prisma.product.findMany();
//
//   return allProducts;
// };

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

  const newProduct = await prisma.product.update({
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
    },
  });

  const formatedProduct = {
    ...newProduct,
    categories: newProduct.categories.map((category) => category.category.name),
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