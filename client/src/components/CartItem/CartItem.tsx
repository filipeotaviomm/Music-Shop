import {
  Brand,
  ImgModalContainer,
  Name,
  PriceModal,
} from "../../styled-components/CardProduct.styles.ts";
import styled from "styled-components";
import { colors } from "../../styled-components/root.ts";
import { ICart } from "../../types/cart";

import ProductAmount from "../RenderCartItems/ProductAmount";

const ProductInfo = styled.div`
  display: grid;
  align-content: center;
  gap: 32px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: grid;
  height: 160px;
  grid-template-columns: 120px auto;
  gap: 32px;
  padding-block: 2px;

  border-bottom: 2px solid ${colors.purple};
  opacity: 0.99;
`;

function CartItem(props: ICart) {
  const { product, amount } = props;
  const { id, name, brandName, image, price } = product;

  const FinalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <>
      <Wrapper>
        <ImgModalContainer>
          <img src={image} alt={`${name} image`} />
        </ImgModalContainer>
        <ProductInfo>
          <div>
            <Brand>{brandName}</Brand>
            <Name>{name}</Name>
          </div>
          <ProductAmount product={product} amount={amount} />

          <PriceModal>{FinalPrice}</PriceModal>
        </ProductInfo>
      </Wrapper>
    </>
  );
}

export default CartItem;
