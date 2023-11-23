import { ProductCreate, ProductUpdate, ProductBrute, ProductReturn } from "../interfaces/products.interface";
import { prisma } from "../app";
import { Product } from "@prisma/client";

export const createProductService = async (
  data: ProductCreate,
  userId: number
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

export const getAllProductsService = async (): Promise<Product[]> => {
  const allProducts: Product[] = await prisma.product.findMany({
    include: {
      categories: { select: { category: true } },
      owner: { select: { name: true } },
    },
  });

  return allProducts;
};

export const getAllProductsIdService = async (
  userId: number
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

export const updateProductService = async (id: number, data: ProductUpdate): Promise<Product> => {
  const { categories } = data;

    if (categories) {
        await prisma.product.update({
            where: {id},
            data: {
                categories: {deleteMany: {}}
            }
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

export const deleteProductService = async (id: number): Promise<void> => {
  await prisma.product.delete({ where: { id } });
};

export const formatProductReturn = (product: any) => {
  const formatedProduct: ProductReturn = {
    ...product,
    categories: product.categories.map((category: any) => category.category.name)
  };

    return formatedProduct;
};

export const formatProductsReturn = (products: any) => {
  const formatedProducts: ProductReturn[] = products.map(
    (product: ProductBrute) => ({
      ...product,
      categories: product.categories.map((category: any) => category.category.name)
    })
  );

  return formatedProducts;

};