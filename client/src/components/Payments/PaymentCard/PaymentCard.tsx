import {
  IPayment,
  IPaymentCard,
  IPaymentContext,
} from "../../../types/payment";
import { usePaymentContext } from "../../../providers/UserContext/PaymentProvider";
import Modal from "../../Modal";
import EditPaymentForm from "../Form/EditPaymentForm";
import ModalQuit from "../../ModalQuit";
import {Button, Card, CardTitle, CartButtons, CartContent} from "../../../styled-components/resumeCard.styles.ts";

export function PaymentCard(props: IPaymentCard) {
  const { payment } = props;
  const {
    isEditPaymentModalOpen,
    setIsEditPaymentModalOpen,
    setEditingPayment,
    setIsDeletePaymentModalOpen,
    isDeletePaymentModalOpen,
    deletePayment,
  } = usePaymentContext() as IPaymentContext;

  function handleEditPost(payment: IPayment) {
    setEditingPayment(payment);
    setIsEditPaymentModalOpen(true);
  }

  return (
    <Card>
      <CardTitle>{`Cartão ${payment.number.replace(
        /(.{4})(.{4})(.{4})(.{4})/,
        "$1-$2-$3-$4",
      )} (${payment.type == "credit" ? "Crédito" : "Débito"})`}</CardTitle>
      <CartContent>
        <CartButtons>
          <Button
            style={{ color: "black" }}
            onClick={() => handleEditPost(payment)}
          >
            Editar
          </Button>
          <Button onClick={() => setIsDeletePaymentModalOpen(true)}>
            Excluir
          </Button>
        </CartButtons>
      </CartContent>
      <Modal
        open={isEditPaymentModalOpen}
        onOpenChange={setIsEditPaymentModalOpen}
        element={EditPaymentForm()}
      />
      <Modal
        open={isDeletePaymentModalOpen}
        onOpenChange={setIsDeletePaymentModalOpen}
        element={
          <ModalQuit
            question={`Tens certeza de remover este cartão `}
            handleCloseModalClick={() => setIsDeletePaymentModalOpen(false)}
            handleQuitButtonClick={() => deletePayment(payment)}
          />
        }
      />
    </Card>
  );
}

export default PaymentCard;
