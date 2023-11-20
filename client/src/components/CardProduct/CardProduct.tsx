import { CardProd, ProductGrid } from "../../styled-components/Cards.styles.ts";
import styled from "styled-components";
import { colors } from "../../styled-components/root.ts";
import { ProductCardProps } from "../../types/types";

const ImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
  object-fit: contain;
  //border: 1px solid red;
  display: grid;
  place-content: center;

  & img {
    width: auto;
    height: 100%;
    //border: 1px solid green;
    margin: auto;
  }
`;

const Brand = styled.h4`
  color: ${colors.grey70};
`;
const Name = styled.h3`
  font-weight: 500;
`;
const Price = styled.h3`
  font-weight: 600;
`;
const ProductButton = styled.button`
  border-radius: 8px;
  &:hover {
  box-shadow: 0 -9px 16px 3px #dddddd;
    scale: 1.05;
  outline: 2px solid ${colors.purpleHover};
}
  &:focus {
    scale: 1.05;
    outline-offset: 4px;
  outline: 2px solid ${colors.purple};
    z-index: 1;
  }
`

function CardProduct({ image, brand, name, price }: ProductCardProps) {
  return (
    <CardProd>
      <ProductButton>
        <ProductGrid>
          <ImageContainer>
            <img src={image} alt={`${name} image`} />
          </ImageContainer>
            <Brand>{brand}</Brand>
          <div style={{display: "grid", gridTemplateRows:"90px auto"}}>
            <Name>{name}</Name>
            <Price>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(price)}
            </Price>
          </div>
        </ProductGrid>
      </ProductButton>
    </CardProd>
  );
}

export default CardProduct;
