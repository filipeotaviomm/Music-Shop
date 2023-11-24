import React, {createContext, ReactNode, useState} from "react";
import { IAddressContext, IAddress, IAddressForm,  } from "../../types/address";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const AddressContext = createContext({});

const useAddressContext = () => React.useContext(AddressContext);

const AddressProvider = (props: { children: ReactNode }) => {
    
    const [ addresses, setAddresses ] = useState<IAddress[]>([]);

    const [ isCreateAddressModalOpen, setIsCreateAddressModalOpen ] = useState<boolean>(false);
    
    async function createAddressRequest(formData: IAddressForm) {
        const token = JSON.parse(localStorage.getItem("@TOKEN")!);

        try {
            await api.post("/addresses", formData, {
                headers: {Authorization: `Bearer ${token}`}
            });
            toast.success(`Endereço "${formData.name}" cadastrado com sucesso!`)

            getAllAddresses();
        } catch (error) {
            console.log(error);
        } finally {
            setIsCreateAddressModalOpen(false);
        }
    };
    
    async function getAllAddresses() {
        const token = JSON.parse(localStorage.getItem("@TOKEN")!);
        try {
            const {data} = await api.get("/addresses", {
                headers: {Authorization: `Bearer ${token}`}
            });
            setAddresses(data);
        } catch (error) {
            
        }

    
    };

    const values: IAddressContext = {
        addresses,
        isCreateAddressModalOpen,
        setIsCreateAddressModalOpen,
        createAddressRequest,
        getAllAddresses
    };

    return (
        <AddressContext.Provider value={values}>{props.children}</AddressContext.Provider>
        );
    };
    
export {AddressProvider, useAddressContext};
