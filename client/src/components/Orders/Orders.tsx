import Money from "../../assets/Nothing-in-Cart.svg";
import styled from "styled-components";
import { fontSize } from "../../styled-components/root.ts";
import {
  SendBtn,
} from "../../styled-components/Button.styles.ts";
import { useNavigate } from "react-router-dom";

const H1 = styled.h1`
  width: 100%;
  font-weight: 500;
  text-align: center;
  line-height: 130%;
  font-size: ${fontSize.h3};
  @media (min-width: 700px) {
    font-size: ${fontSize.h2};
  }
`;
const Section = styled.section`
  display: grid;
  justify-items: center;
`;

function Orders() {
  const navigate = useNavigate();
  return (
    <Section>
      <H1>Por enquanto não há pedidos</H1>
      <img src={Money} alt="" />
      <SendBtn onClick={() => navigate("/")}>Quero comprar :)</SendBtn>
    </Section>
  );
}

export default Orders;
