import { Product } from "@prisma/client";
import { ProductCreate, ProductUpdate } from "../interfaces/products.interface";
import { prisma } from "../app";

export const createProductService = async (data: ProductCreate, userId: number): Promise<Product> => {
    const product: Product = await prisma.product.create({
        data: {...data,
            owner: {connect: {id: userId}}
        }
    });

    return product;
};

export const getAllProductsIdService = async (userId: number): Promise<Product[]> => {
    const allProducts = await prisma.product.findMany({where: {ownerId: userId}});

    return allProducts;
};

export const getAllProductsService = async (): Promise<Product[]> => {
    const allProducts = await prisma.product.findMany();

    return allProducts;
};

export const updateProductService = async (id: number, data: ProductUpdate): Promise<Product> => {
    const newProduct = await prisma.product.update({where: {id}, data});

    return newProduct;
};

export const deleteProductService = async (id: number): Promise<void> => {
    await prisma.product.delete({where: {id}});
};