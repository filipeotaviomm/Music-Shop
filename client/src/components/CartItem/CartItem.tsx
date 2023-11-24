import Trash from "../../assets/trash.svg";
import {
  Brand,
  ImgModalContainer,
  Name,
  PriceModal,
} from "../../styled-components/CardProduct.styles.ts";
import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";
import { ICart, ICartContext } from "../../types/cart";

import ProductAmount from "../RenderCartItems/ProductAmount";
import { useCartContext } from "../../providers/UserContext";

const ProductInfo = styled.div`
  display: grid;
  align-content: center;
  gap: 32px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: grid;
  height: 100%;
  max-height: 200px;
  grid-template-columns: 120px auto;
  gap: 32px;
  padding-block: 20px;

  border-bottom: 2px solid ${colors.purple};
  opacity: 0.99;
  position: relative;

  @media (max-width: 550px) {
    display: flex;
    flex-flow: column;
    justify-items: center;
    max-height: none;
    height: auto;
  }
`;
const Warning = styled.p`
  position: absolute;
  font-size: ${fontSize.smallLink};
  left: 0;
  color: ${colors.purpleBorder};
  bottom: 2px;
  @media (min-width: 600px) {
    left: unset;
    right: 0;
  }
`;


const RemoveBtn = styled.button`
  display: grid;
  justify-items: center;
  &:hover{
    outline: 2px solid ${colors.red40};
  }
`

function CartItem(props: ICart) {
  const { product, amount } = props;
  const { name, brandName, image, price, id } = product;
  const { removeProductInCart } = useCartContext() as ICartContext;

  const FinalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <>
      <Wrapper>
        {amount === product.stock && (
          <Warning>{product.stock} é o estoque total ;)</Warning>
        )}
        <ImgModalContainer>
          <img src={image} alt={`${name} image`} />
        </ImgModalContainer>
        <ProductInfo>
          <div>
            <Brand>{brandName}</Brand>
            <Name>{name}</Name>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RemoveBtn
                onClick={() => removeProductInCart(id)}>
              <img src={Trash} />
              <span style={{
                color: colors.red60,
                fontSize:fontSize.smallLink}}>remover</span>
            </RemoveBtn>
            <ProductAmount product={product} amount={amount} />
            <PriceModal>{FinalPrice}</PriceModal>
          </div>
        </ProductInfo>
      </Wrapper>
    </>
  );
}

export default CartItem;
