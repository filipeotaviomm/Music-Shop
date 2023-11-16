import { Address, User } from "@prisma/client";
import { AddressCreate } from "../interfaces/addresses.interface";
import { prisma } from "../app";

export const createAddressService = async (data: AddressCreate, userId: number) => {
    const address: Address = await prisma.address.create({
        data: {...data, user: {connect: {id: userId}}}
    });

    return address;
};

export const getAllAddressesService = async (userId: number) => {
    const allAddresses = prisma.address.findMany({where: {userId}});

    return allAddresses;
};