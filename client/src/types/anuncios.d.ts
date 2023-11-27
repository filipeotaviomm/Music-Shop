export interface IAnuncio {
    id: number,
    name: string
    description: string | undefined
    price: number
    image: string
    stock: number
    color: string | undefined
    condition: string
    categories: string
    brandName: string
}
  
  export interface IProductForm {
    "name": string
    "description": string | undefined
    "price": number | string
    "image": string
    "stock": number | string
    "color": string | undefined
    "condition": string
    "categories": string
    "brandName": string
  }
  
  export interface IAnuncioContext {
    anuncios: IAnuncio[]

    isCreateAnuncioModalOpen: boolean
    setIsCreateAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>

    createAnuncioRequest: (formData: IProductForm) => Promise<void>
    getAllAnuncios: () => Promise<void>
    editAnuncio(formData: IProductForm, number: number): Promise<void>
    deleteAnuncio: (anuncio: IAnuncio) => Promise<void>

    isEditAnuncioModalOpen: boolean
    setIsEditAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    editingAnuncio: IAnuncio | null
    setEditingAnuncio: React.Dispatch<React.SetStateAction<IAnuncio | null>>

    isDeleteAnuncioModalOpen: boolean
    setIsDeleteAnuncioModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    deletingAnuncio: IAnuncio | null
    setDeletingAnuncio: React.Dispatch<React.SetStateAction<IAnuncio | null>>


  }

  export interface IAnuncioCard {
    anuncio: IAnuncio
  }