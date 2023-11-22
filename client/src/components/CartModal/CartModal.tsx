import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useCartContext } from "../../providers/UserContext";
import { DDescription, DTitle } from "../../styled-components/Modal.styles.tsx";
import EmptyCart from "../EmptyCart";
import { ICartContext } from "../../types/cart";
import RenderCartItems from "../RenderCartItems";
import { fontSize } from "../../styled-components/root.ts";

function CartModal() {
  const { cart } = useCartContext() as ICartContext;
  const sortedProducts =
    cart &&
    cart.sort(
      (a, b) => Number(b.product.price) - Number(a.product.price),
    );

  return (
    <div>
      <DTitle style={{ textAlign: "left", fontSize: fontSize.h3 }}>
        Meu carrinho
      </DTitle>
      <DDescription>
        {cart && cart.length < 0 ? (
          "Seu carrinho está vazio por enquanto"
        ) : (
          <VisuallyHidden.Root>
            Edite os itens de seu carrinho
          </VisuallyHidden.Root>
        )}
      </DDescription>
      {sortedProducts && sortedProducts.length > 0 ? (
        <RenderCartItems />
      ) : (
        <EmptyCart />
      )}
      <></>
    </div>
  );
}

export default CartModal;
