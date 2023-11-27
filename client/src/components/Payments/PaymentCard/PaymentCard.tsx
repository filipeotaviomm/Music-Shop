import styled from "styled-components";
import { IPayment, IPaymentCard, IPaymentContext } from "../../../types/payment";
import { colors } from "../../../styled-components/root";
import { usePaymentContext } from "../../../providers/UserContext/PaymentProvider";
import Modal from "../../Modal";
import EditPaymentForm from "../Form/EditPaymentForm";

    const Card = styled.div`
        width: 100%;
        border-top: 2px solid ${colors.purple};
        padding: 20px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    `;

    const CardTitle = styled.h3`
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    `;

    const CartContent = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const CartButtons = styled.div`
        display: flex;
        align-self: end;
        gap: 20px; 
    `;

    const Button = styled.h3`
        color: ${colors.red60};
        font-weight: 600;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    `;

export function PaymentCard(props: IPaymentCard) {

    const {payment} = props;
    const { isEditPaymentModalOpen, setIsEditPaymentModalOpen, setEditingPayment, setIsDeletePaymentModalOpen, setDeletingPayment } = usePaymentContext() as IPaymentContext;
    
    function handleEditPost(payment: IPayment) {
        setEditingPayment(payment);
        setIsEditPaymentModalOpen(true);
    };

    function handleDeletePost(payment: IPayment) {
        setDeletingPayment(payment);
        setIsDeletePaymentModalOpen(true);
    }

    return (
        <Card>
            <CardTitle>{`Cartão ${payment.number.replace(/(.{4})(.{4})(.{4})(.{4})/, "$1-$2-$3-$4")} (${payment.type == "credit" ? "Crédito" : "Débito"})`}</CardTitle>
            <CartContent>
                <CartButtons>
                    <Button style={{color: "black"}} onClick={() => handleEditPost(payment)}>Editar</Button>
                    <Button onClick={() => handleDeletePost(payment)}>Excluir</Button>
                </CartButtons>
            </CartContent>
            <Modal open={isEditPaymentModalOpen} onOpenChange={setIsEditPaymentModalOpen} element={EditPaymentForm()}/>
        </Card>
    )
};

export default PaymentCard;