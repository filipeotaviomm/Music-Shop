import React, {createContext, ReactNode, useEffect, useState} from "react";
import {toast} from "react-toastify";
import { AddressValues, IAddressContext } from "../../types/address";

export const AddressContext = createContext({});

const useAddressContext = () => React.useContext(AddressContext);

const AddressProvider = (props: { children: ReactNode }) => {
    
    const [ addresses, setAddresses ] = useState<IAddressContext[]>([]);
    
    const values: AddressValues = {
        addresses
    };
    
    return (
        <AddressContext.Provider value={values}>{props.children}</AddressContext.Provider>
        );
    };
    
export {AddressProvider, useAddressContext};
