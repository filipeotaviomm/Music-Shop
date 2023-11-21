import { useCartContext } from "../../providers/UserContext";
import { ICartContext } from "../../types/cart";

function CartModal() {
  const { cart } = useCartContext() as ICartContext;
  console.log(cart);
  return "oi";
}

export default CartModal;
