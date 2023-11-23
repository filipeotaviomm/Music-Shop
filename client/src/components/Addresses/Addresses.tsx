import styled from "styled-components";
import { H1, H2 } from "../../styled-components/Typography.styles";
import { useAddressContext } from "../../providers/UserContext/AddressProvider";
import { AddressValues } from "../../types/address";
import NotFound from "../../assets/No-Order.svg"
import Button from "../Button";

const AddressesContainer = styled.div`
  width: 495px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #8080803b;
  width: fit-content;
`;


function Addresses() {

  const { addresses } = useAddressContext() as AddressValues;

  return (
    <>
      <div>
        <H1>ENDEREÇOS</H1>
      </div>

      <AddressesContainer>
      {addresses.length > 0 ? <div>TEMOS ENDEREÇOS!</div> : (
        <>
          <img src={NotFound} style={{width: 'fit-content'}}/>
          <H2>Nada por aqui!</H2>
        </>
      )}

      </AddressesContainer>
    </>
  )
}

export default Addresses;
