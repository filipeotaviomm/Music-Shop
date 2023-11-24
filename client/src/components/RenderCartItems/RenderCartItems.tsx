import CartItem from "../CartItem";
import { useCartContext, useUserContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";
import {
  ModalBottonButton,
  SendBtn,

} from "../../styled-components/Button.styles.ts";
import styled from "styled-components";
import { H3 } from "../../styled-components/Typography.styles.ts";
import { colors, fontSize } from "../../styled-components/root.ts";
import { IUserContext } from "../../types/user";
import { useNavigate } from "react-router-dom";

const CartOl = styled.ol`
  margin-block: 16px;
  overflow-y: auto;
  padding-inline-end: clamp(8px, 5%, 32px);
  height: 100%;
  margin-block-start: 40px;
  @media (min-width: 550px) {
    max-height: 450px;

    margin-block: 0;
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 550px) {
    display: flex;
  }
`;
const FinalPrice = styled(H3)`
  font-size: ${fontSize.link};
  font-weight: 600;
`;
const Wrapper = styled.div`
  display: grid;
  gap: clamp(1svh, 3svh, 16px);
  grid-template-rows: auto auto;
  height: 85svh;
  @media (min-width: 550px) {
    height: 100%;
  }
`;

const BottonInfo = styled.div`
  margin-block-start: 32px;
  display: flex;
  flex-flow: column;
  gap: 16px;
`

function RenderCartItems() {
  const { cart, setIsCartModalOpen, isCartModalOpen } =
    useCartContext() as ICartContext;
  const { setIsLogOpen, isLogOpen } = useUserContext() as IUserContext;

  function LogToBuy() {
    setIsCartModalOpen(!isCartModalOpen);
    setIsLogOpen(!isLogOpen);
  }
  const { token } = useUserContext() as IUserContext;

  const navigate = useNavigate();
  const subTotal: number = cart
    ? cart.reduce((total, item) => {
        const price = item.product.price;
        const amount = item.amount;
        return total + price * amount;
      }, 0)
    : 0;
  const finalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(subTotal);

  return (
    <Wrapper>
      <CartOl>
        {cart &&
          cart.map((item) => (
            <CartItem
              key={nanoid()}
              amount={item.amount}
              product={item.product}
            />
          ))}
      </CartOl>
      <BottonInfo >
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <H3 style={{ fontSize: fontSize.link }}>Subtotal:</H3>
            <FinalPrice>{finalPrice}</FinalPrice>
          </div>
          <p style={{ color: colors.grey70, fontSize: fontSize.smallLink }}>
            O frete é adicionado a seguir :)
          </p>
        </div >
        <Buttons>
          <ModalBottonButton
            onClick={() => setIsCartModalOpen(!isCartModalOpen)}
            color={colors.purple}
            id={colors.offWhite}
          >
            Continuar comprando
          </ModalBottonButton>
          <SendBtn
            style={{ marginBlock: "0" }}
            onClick={() => {
              token ? navigate("/makeorder") : LogToBuy();
            }}
          >
            Finalizar compra
          </SendBtn>
        </Buttons>
      </BottonInfo>

    </Wrapper>
  );
}

export default RenderCartItems;
