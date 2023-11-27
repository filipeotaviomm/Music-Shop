import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { useAddressContext } from "../../providers/UserContext/AddressProvider";
import { IAddressContext } from "../../types/address";
import NotFound from "../../assets/No-Order.svg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CreateAddressForm from "./Form/CreateAddressForm";
import { useEffect } from "react";
import { AddressCard } from "./AddressCard/AddressCard";
import Modal from "../Modal";
import { colors } from "../../styled-components/root.ts";
import { SendBtn } from "../../styled-components/Button.styles.ts";

const AddressContent = styled.div`
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
export const ResumeHeader = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;

  @media (min-width: 800px) {
    flex-flow: unset;
    justify-content: space-between;
  }
`;

const AddAddressBtn = styled.button`
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

export const AddressFormContainer = styled.div`
  overflow-y: auto;
  padding-inline-end: 16px;
`;

function Addresses() {
  const {
    addresses,
    isCreateAddressModalOpen,
    setIsCreateAddressModalOpen,
    getAllAddresses,
  } = useAddressContext() as IAddressContext;

  useEffect(() => {
    getAllAddresses();
  }, []);

  return (
    <>
      <ResumeHeader>
        <H1>ENDEREÇOS</H1>
        <AddAddressBtn
          onClick={() => setIsCreateAddressModalOpen(!isCreateAddressModalOpen)}
        >
          <MdOutlineAddCircleOutline size="18" />
          Endereço
        </AddAddressBtn>
      </ResumeHeader>

      <div>
        {addresses.length > 0 ? (
          <AddressContent>
            {addresses.map((address) => (
              <AddressCard key={address.id} address={address} />
            ))}
          </AddressContent>
        ) : (
          <>
            <img alt="" src={NotFound} style={{ alignSelf: "center" }} />
            <H2>Nenhum endereço cadastrado.</H2>
          </>
        )}
      </div>

      <Modal
        open={isCreateAddressModalOpen}
        onOpenChange={setIsCreateAddressModalOpen}
        element={CreateAddressForm()}
      />
    </>
  );
}

export default Addresses;
