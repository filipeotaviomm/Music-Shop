import { Address } from "@prisma/client";
import { AddressCreate, AddressUpdate } from "../interfaces/addresses.interface";
import { prisma } from "../app";

export const createAddressService = async (data: AddressCreate, userId: number): Promise<Address> => {
    const address: Address = await prisma.address.create({
        data: {...data, user: {connect: {id: userId}}}
    });

    return address;
};

export const getAllAddressesService = async (userId: number): Promise<Address[]> => {
    const allAddresses = await prisma.address.findMany({where: {userId}});

    return allAddresses;
};

export const updateAddressService = async (id: number, data: AddressUpdate): Promise<Address> => {
    const newAddress = await prisma.address.update({where: {id}, data});

    return newAddress;
};

export const deleteAddressService = async (id: number): Promise<void> => {
    await prisma.address.delete({where: {id}});
};