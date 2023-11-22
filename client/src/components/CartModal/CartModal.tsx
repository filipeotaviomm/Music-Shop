import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";
import CartItem from "../CartItem";
import { DDescription, DTitle } from "../../styled-components/Modal.styles.tsx";

function CartModal() {
  const { cart } = useCartContext() as ICartContext;
  console.log(cart);
  return (
    <div>
      <DTitle>Seu Carrinho</DTitle>
      <DDescription></DDescription>
      {cart && cart.map((item) => <CartItem item={item} />)}
    </div>
  );
}

export default CartModal;
