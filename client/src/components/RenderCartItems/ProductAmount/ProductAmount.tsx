import { DefaultButton } from "../../../styled-components/Button.styles.ts";
import { Minus, Plus } from "react-feather";
import { useCartContext } from "../../../providers/UserContext";
import { ICart, ICartContext } from "../../../types/cart";
import styled from "styled-components";

const Amount = styled.div`
  display: flex;
  margin-block-end: 16px;
  gap: 16px;
`;

function ProductAmount({ amount, product }: ICart) {
  const { updateProductAmount } = useCartContext() as ICartContext;

  return (
    <Amount>
      <DefaultButton
        disabled={!(amount > 1)}
        onClick={() =>
          updateProductAmount(product, amount, product.id, "remove")
        }
      >
        <Minus />
      </DefaultButton>
      <span>{amount}</span>
      <DefaultButton
        disabled={!(product.stock > amount)}
        onClick={() => updateProductAmount(product, amount, product.id)}
      >
        <Plus />
      </DefaultButton>

    </Amount>
  );
}

export default ProductAmount;
