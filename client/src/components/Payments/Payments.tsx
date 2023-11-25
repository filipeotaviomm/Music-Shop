import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { usePaymentContext } from "../../providers/UserContext/PaymentProvider";
import { IPaymentContext } from "../../types/payment";
import CardImage from "../../assets/Payment-Information.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md"
import CreatePaymentForm from "./Form/CreatePaymentForm";
import { useEffect } from "react";
import Modal from "../Modal";
import DeletePaymentForm from "./Form/DeletePaymentForm";
import PaymentCard from "./PaymentCard";

const PaymentContent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 20px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

const PaymentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddPaymentBtn = styled.button`
padding: 16px;
border-radius: 20px;
transition: .05s;
  
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &:hover{
    outline: 2px solid hsla(242, 62%, 56%, 1);
    background-color: #fff;
  }
`;

export const PaymentFormContainer = styled.div`
  overflow-y: auto;
  padding-inline-end: 16px;
`

function Payments() {

    const { payments, isCreatePaymentModalOpen, setIsCreatePaymentModalOpen, getAllPayments, isDeletePaymentModalOpen, setIsDeletePaymentModalOpen } = usePaymentContext() as IPaymentContext;

    useEffect(() => {
      // getAllPayments();
    }, []);

  return (
    <>
      <PaymentHeader>
        <H1>CARTÕES</H1>
        <AddPaymentBtn
          onClick={() => setIsCreatePaymentModalOpen(true)}
        >
          <MdOutlineAddCircleOutline size="18" />
          Cartão
        </AddPaymentBtn>
      </PaymentHeader>

      <div>
        {payments ? (
          <PaymentContent>
            {/* {payments.map((payment) => (
              // <PaymentCard key={payment.id} payment={payment} />
            ))} */}
          </PaymentContent>
        ) : (
          <>
            <img src={CardImage} style={{ alignSelf: "center" }} />
            <H2>Nenhum Cartão cadastrado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreatePaymentModalOpen}
        onOpenChange={setIsCreatePaymentModalOpen}
        element={CreatePaymentForm()}
      />
      <Modal
        open={isDeletePaymentModalOpen}
        onOpenChange={setIsDeletePaymentModalOpen}
        element={DeletePaymentForm()}
      />
    </>
  );
}

export default Payments;
