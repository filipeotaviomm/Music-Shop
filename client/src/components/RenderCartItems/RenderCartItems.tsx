import CartItem from "../CartItem";
import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";
import { InlineButton } from "../../styled-components/Button.styles.ts";

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

  return (
    <>
      {/*<ol style={{overflow: "auto"}}>*/}
      <ol>
        {cart &&
          cart.map((item) => (
            <CartItem
              key={nanoid()}
              amount={item.amount}
              product={item.product}
            />
          ))}
      </ol>
      <InlineButton onClick={cleanCart}>limpar</InlineButton>

      {finalPrice}
    </>
  );
}

export default RenderCartItems;
