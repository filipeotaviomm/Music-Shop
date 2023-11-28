export interface IPayment {
    id: number,
    number: string
    type: string
    userId: number
  }
  
  export interface IPaymentForm {
    "number": string
    "type": string
  }
  
  export interface IPaymentContext {
    payments: IPayment[]

    isCreatePaymentModalOpen: boolean
    setIsCreatePaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>

    createPaymentRequest: (formData: IPaymentForm) => Promise<void>
    getAllPayments: () => Promise<void>
    editPayment(formData: IPaymentForm, paymentId: number): Promise<void>
    deletePayment: (payment: IPayment) => Promise<void>

    isEditPaymentModalOpen: boolean
    setIsEditPaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    editingPayment: IPayment | null
    setEditingPayment: React.Dispatch<React.SetStateAction<IPayment | null>>

    isDeletePaymentModalOpen: boolean
    setIsDeletePaymentModalOpen: React.Dispatch<React.SetStateAction<boolean>>


  }

  export interface IPaymentCard {
    payment: IPayment
  }