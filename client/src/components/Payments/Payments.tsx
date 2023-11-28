import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { usePaymentContext } from "../../providers/UserContext/PaymentProvider";
import { IPaymentContext } from "../../types/payment";
import CardImage from "../../assets/Payment-Information.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreatePaymentForm from "./Form/CreatePaymentForm";
import { useEffect } from "react";
import Modal from "../Modal";
import PaymentCard from "./PaymentCard";
import { colors } from "../../styled-components/root";
import { ResumeHeader } from "../Addresses";
import { useUserContext } from "../../providers/UserContext";
import { IUserContext } from "../../types/user";
import Loader from "../Loader";

const PaymentContent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 20px;
  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;

const AddPaymentsBtn = styled.button`
  padding: 16px;
  border-radius: 20px;
  transition: 0.5s;

  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  background-color: ${colors.purple};
  color: ${colors.white000};

  &:hover {
    transform: scale(1.05);
    background-color: ${colors.purpleHover};
  }
`;

export const PaymentFormContainer = styled.div`
  overflow-y: auto;
  padding-inline-end: 16px;
`;

function Payments() {
  const {
    payments,
    isCreatePaymentModalOpen,
    setIsCreatePaymentModalOpen,
    getAllPayments,
  } = usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

  useEffect(() => {
    getAllPayments();
  }, []);

  return (
    <>
      <ResumeHeader>
        <H1>CARTÕES</H1>

        <AddPaymentsBtn onClick={() => setIsCreatePaymentModalOpen(true)}>
          <MdOutlineAddCircleOutline size="18" />
          Cartão
        </AddPaymentsBtn>
      </ResumeHeader>

      <div>
        {payments.length > 0 ? (
          <PaymentContent>
            {isLoading ? (
              <Loader />
            ) : (
              payments.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
              ))
            )}
          </PaymentContent>
        ) : (
          <>
            <img alt="" src={CardImage} style={{ alignSelf: "center" }} />
            <H2>Nenhum Cartão cadastrado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreatePaymentModalOpen}
        onOpenChange={setIsCreatePaymentModalOpen}
        element={CreatePaymentForm()}
      />

    </>
  );
}

export default Payments;
