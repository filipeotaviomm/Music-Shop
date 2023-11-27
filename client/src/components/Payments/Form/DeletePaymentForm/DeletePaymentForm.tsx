import styled from "styled-components";
import { usePaymentContext } from "../../../../providers/UserContext/PaymentProvider";
import { H2 } from "../../../../styled-components/Typography.styles";
import { IPaymentContext } from "../../../../types/payment";
import { colors } from "../../../../styled-components/root";
import Trash from "../../../../assets/Remove-Confirmation.svg"

const Card = styled.div`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    `;

    const CartButtons = styled.div`
        display: flex;
        align-self: center;
        gap: 20px; 
    `;

    const Button = styled.button`
        padding: 16px;
        border-radius: 20px;
        transition: .05s;
        outline: 2px solid ${colors.grey90};
        
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

        &:hover{
            background-color: ${colors.grey10};
        }
    `;

    const RemoveButton = styled(Button)`
        color: ${colors.white000};
        background-color: red;

        &:hover{
            color: ${colors.black};
            background-color: ${colors.white000};
        }
    `;

function DeletePaymentForm() {

    const { deletingPayment: payment, deletePayment, setIsDeletePaymentModalOpen } = usePaymentContext() as IPaymentContext;

    return (
        <div>
            <Card>
                <H2>Você realmente deseja excluir este cartão?</H2>

                <img src={Trash}/>
                <CartButtons>
                    <Button onClick={() => setIsDeletePaymentModalOpen(false)}>Cancelar</Button>
                    <RemoveButton onClick={() => deletePayment(payment!)}>Excluir</RemoveButton>
                </CartButtons>
            </Card>
        </div>
    );
};

export default DeletePaymentForm;