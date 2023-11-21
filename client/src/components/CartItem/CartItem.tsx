import { IProductContext } from "../../types/product";
import {
  Brand,
  ImgModalContainer, Name, Price, PriceModal,
} from "../../styled-components/CardProduct.styles.ts";
import styled from "styled-components";
import {colors} from "../../styled-components/root.ts";

type CartProps = {
  item: IProductContext;
};

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
  opacity: .99;
`;

function CartItem(props: CartProps) {
  const { item } = props;
  const { name, brand, image, price } = item;

  const FinalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

  console.log(item);
  return (
    <>
      <Wrapper>
        <ImgModalContainer>
          <img src={image} alt={`${name} image`} />
        </ImgModalContainer>
        <ProductInfo>
          <div>
            <Brand>{name.split(" ")[0]}</Brand>
            <Name>{name}</Name>
          </div>
          <PriceModal>{FinalPrice}</PriceModal>
        </ProductInfo>
      </Wrapper>
    </>
  );
}

export default CartItem;
