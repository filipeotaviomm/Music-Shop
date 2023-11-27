import React, { createContext, ReactNode, useState } from "react";
import { IPaymentContext, IPayment, IPaymentForm } from "../../types/payment";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const PaymentContext = createContext({});

const usePaymentContext = () => React.useContext(PaymentContext);

const PaymentProvider = (props: { children: ReactNode }) => {
  const [payments, setPayments] = useState<IPayment[]>([]);

  const [isCreatePaymentModalOpen, setIsCreatePaymentModalOpen] =
    useState<boolean>(false);
  const [isEditPaymentModalOpen, setIsEditPaymentModalOpen] =
    useState<boolean>(false);
  const [editingPayment, setEditingPayment] = useState<IPayment | null>(null);
  const [isDeletePaymentModalOpen, setIsDeletePaymentModalOpen] =
    useState<boolean>(false);
  const [deletingPayment, setDeletingPayment] = useState<IPayment | null>(null);

  async function createPaymentRequest(formData: IPaymentForm) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.post("/payments", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Cartão cadastrado com sucesso!`);

      getAllPayments();
    } catch (error) {
      console.log(error);
    } finally {
      setIsCreatePaymentModalOpen(false);
    }
  }

  async function getAllPayments() {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);
    try {
      const { data } = await api.get("/payments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPayments(data);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    }
  }

  async function editPayment(formData: IPaymentForm, paymentId: number) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.patch(`/payments/${paymentId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Cartão atualizado com sucesso!`);

      getAllPayments();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsEditPaymentModalOpen(false);
      setEditingPayment(null);
    }
  }

  async function deletePayment(payment: IPayment) {
    const token = JSON.parse(localStorage.getItem("@TOKEN")!);

    try {
      await api.delete(`/payments/${payment.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Cartão removido com sucesso!`);

      getAllPayments();
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error("Ops, faça login novamente e tente outra vez.");
      }
    } finally {
      setIsDeletePaymentModalOpen(false);
      setDeletingPayment(null);
    }
  }

  const values: IPaymentContext = {
    payments,
    isCreatePaymentModalOpen,
    setIsCreatePaymentModalOpen,
    createPaymentRequest,
    getAllPayments,
    isEditPaymentModalOpen,
    setIsEditPaymentModalOpen,
    editPayment,
    editingPayment,
    setEditingPayment,
    isDeletePaymentModalOpen,
    setIsDeletePaymentModalOpen,
    deletingPayment,
    setDeletingPayment,
    deletePayment,
  };

  return (
    <PaymentContext.Provider value={values}>
      {props.children}
    </PaymentContext.Provider>
  );
};

export {PaymentProvider, usePaymentContext};
