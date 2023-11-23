export interface IAddressContext {
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

  export interface AddressValues {
    addresses: IAddressContext[]
  }