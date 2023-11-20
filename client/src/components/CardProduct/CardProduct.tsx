import Cart from "../../assets/Cart.svg";

import { CardProd, ProductGrid } from "../../styled-components/Cards.styles.ts";
import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";
import { ProductCardProps } from "../../types/types";

import { ProfileIcon } from "../../styled-components/Header.styles.tsx";
import { AddCartButton } from "../../styled-components/Button.styles.ts";

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
    outline-offset: 4px;
    outline: 2px solid ${colors.purpleHover};
  }
  &:hover img {
    scale: 1.05;
  }

  &:focus {
    scale: 1.05;
    outline-offset: 4px;
    outline: 2px solid ${colors.purple};
    z-index: 1;
  }
`;

function CardProduct({ image, brand, name, price }: ProductCardProps) {
  return (
    <CardProd>
      <ProductButton
        tabIndex={0}
      >
        <ProductGrid>
          <ImageContainer>
            <img src={image} alt={`${name} image`} />
          </ImageContainer>
          <Brand>{brand}</Brand>
          <div style={{ display: "grid", gridTemplateRows: "90px auto" }}>
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

        <AddCartButton onClick={()=>console.log("oi")}>
          <ProfileIcon src={Cart} alt="Carrinho" />
          <span style={{ fontSize: fontSize.icons }}>
            CARRINHO+
          </span>
        </AddCartButton>
    </CardProd>
  );
}

export default CardProduct;
