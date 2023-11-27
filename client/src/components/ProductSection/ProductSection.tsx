import Delivery from "../../assets/delivery.png";
import Shipping from "../../assets/shipping.png";
import {
  ImgProduct,
  SectionBuy,
  DivImg,
  DivInfoContainer,
  DivCategories,
  SpanCategory,
  H3NameProduct,
  SpanPrice,
  SpanCor,
  SpanCondition,
  SpanStock,
  SpanSeller,
  SpanSellerName,
  DivImgsDelivery,
  DivImgTextDelivery,
  ImgDelivery,
  SpanDelivery,
  DivImgTextShipping,
  ImgShipping,
  SpanShipping,
} from "./styles";
import { useContext, useEffect } from "react";
import { ProductContext, useCartContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { IFullProductContext } from "../../types/product";
import { SendBtn } from "../../styled-components/Button.styles.ts";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";

const ProductSection = () => {
  const { singleProduct, getProductById } = useContext(
    ProductContext
  ) as IFullProductContext;
  const { addProductInCart } = useCartContext() as ICartContext;

  const { id } = useParams();

  useEffect(() => {
    try {
      getProductById(Number(id));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SectionBuy>
      <DivImg>
        <ImgProduct src={singleProduct?.image} alt="Product Image" />
      </DivImg>
      <DivInfoContainer>
        <DivCategories>
          {singleProduct?.categories.map((category) => (
            <SpanCategory key={nanoid()}>{category}</SpanCategory>
          ))}
        </DivCategories>
        <H3NameProduct>{singleProduct?.name}</H3NameProduct>
        <SpanPrice>R${singleProduct?.price}</SpanPrice>
        <SpanCor>Cor: {singleProduct?.color}</SpanCor>
        <SpanCondition>
          Condição: {singleProduct?.condition == "new" ? "Novo" : "Usado"}
        </SpanCondition>
        <SpanStock>
          {`${singleProduct?.stock} ${
            singleProduct?.stock > 1
              ? "unidades disponíveis"
              : "unidade disponível"
          }`}
        </SpanStock>
        <SendBtn onClick={() => addProductInCart(singleProduct)}>
          Adicionar ao Carrinho
        </SendBtn>

        <SpanSeller>
          Vendedor: <SpanSellerName>{singleProduct?.owner.name}</SpanSellerName>
        </SpanSeller>
        <DivImgsDelivery>
          <DivImgTextDelivery>
            <ImgDelivery src={Delivery} alt="Delivery icon" />
            <SpanDelivery>Entrega segura</SpanDelivery>
          </DivImgTextDelivery>
          <DivImgTextShipping>
            <ImgShipping src={Shipping} alt="Shipping icon" />
            <SpanShipping>Entrega em até 5 dias</SpanShipping>
          </DivImgTextShipping>
        </DivImgsDelivery>
      </DivInfoContainer>
    </SectionBuy>
  );
};

export default ProductSection;
