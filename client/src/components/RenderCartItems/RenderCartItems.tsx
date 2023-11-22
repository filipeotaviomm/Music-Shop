import CartItem from "../CartItem";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";
import { InlineButton } from "../../styled-components/Button.styles.ts";
import styled from "styled-components";
import { H3 } from "../../styled-components/Typography.styles.ts";
import {fontSize} from "../../styled-components/root.ts";

const CartOl = styled.ol`
  margin-block: 16px;
`;

function RenderCartItems() {
  const { cart, cleanCart } = useCartContext() as ICartContext;

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

  const FinalPrice = styled(H3)`
    font-size: ${fontSize.link};
    font-weight: 600;
  `
  return (
    <>
      {/*<ol style={{overflow: "auto"}}>*/}
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
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <InlineButton onClick={cleanCart}>limpar</InlineButton>

        <FinalPrice>{finalPrice}</FinalPrice>
      </div>
    </>
  );
}

export default RenderCartItems;
