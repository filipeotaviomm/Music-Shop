export interface IAddress {
    id: number,
    name: string,
    street: string,
    neihborhood: string,
    number: number,
    zip: string,
    state: string,
    city: string,
    complement: string,
    userId: number
  }
  
  export interface IAddressForm {
    "name": string,
    "city": string,
    "street": string,
    "number": number,
    "neihborhood": string,
    "complement": string,
    "zip": string,
    "state": string
  }
  
  export interface IAddressContext {
    addresses: IAddress[]

    isCreateAddressModalOpen: boolean
    setIsCreateAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>

    createAddressRequest: (formData: IAddressForm) => Promise<void>
    getAllAddresses: () => Promise<void>
  }

  export interface IAddressCard {
    address: IAddress
  }