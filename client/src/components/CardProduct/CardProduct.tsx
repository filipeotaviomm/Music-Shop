import Cart from "../../assets/Cart.svg";

import { CardProd, ProductGrid } from "../../styled-components/Cards.styles.ts";
import { fontSize } from "../../styled-components/root.ts";
// import { ProductCardProps } from "../../types/types";

import { ProfileIcon } from "../../styled-components/Header.styles.tsx";
import { AddCartButton } from "../../styled-components/Button.styles.ts";
import { useCartContext } from "../../providers/UserContext";
import {
  CardProductProps,
} from "../../types/product";
import {
  Brand,
  ImageContainer,
  Name,
  Price,
  ProductButton,
} from "../../styled-components/CardProduct.styles.ts";
import { ICartContext } from "../../types/cart";

function CardProduct(props: CardProductProps) {
  const { addProductInCart } = useCartContext() as ICartContext;

  const { item } = props;
  const { image, brandName, name, price } = item;

  const PriceString = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
  const FinalPrice = () => <Price>{PriceString}</Price>

  return (
    <CardProd>
      <ProductButton tabIndex={0}>
        <ProductGrid>
          <ImageContainer>
            <img src={image} alt={`${name} image`} />
          </ImageContainer>
          <div>
            <Brand>{brandName}</Brand>
            <div style={{ display: "grid", gridTemplateRows: "90px auto" }}>
              <Name>{name}</Name>
            </div>
          </div>
          {FinalPrice()}
        </ProductGrid>
      </ProductButton>

      <AddCartButton onClick={() => addProductInCart(item)}>
        <ProfileIcon src={Cart} alt="Carrinho" />
        <span style={{ fontSize: fontSize.icons }}>CARRINHO+</span>
      </AddCartButton>
    </CardProd>
  );
}

export default CardProduct;
