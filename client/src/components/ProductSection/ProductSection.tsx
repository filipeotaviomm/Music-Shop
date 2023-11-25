import { AiOutlineHeart } from "react-icons/ai";
import Delivery from "../../assets/delivery.png";
import Shipping from "../../assets/shipping.png";
import {
  ImgProduct,
  SectionBuy,
  DivImg,
  DivInfoContainer,
  SpanCategory,
  DivNameLike,
  H3NameProduct,
  ButtonLike,
  SpanPrice,
  SpanCor,
  SpanCondition,
  SpanStock,
  DivAddToCart,
  ButtonAddToCart,
  SpanSeller,
  DivImgsDelivery,
  DivImgTextDelivery,
  ImgDelivery,
  SpanDelivery,
  DivImgTextShipping,
  ImgShipping,
  SpanShipping,
} from "./styles";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../providers/UserContext";
import { useParams } from "react-router-dom";
import { IFullProductContext } from "../../types/product";

const ProductSection = () => {
  const { singleProduct, getProductById } = useContext(
    ProductContext,
  ) as IFullProductContext;

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
        <SpanCategory>{singleProduct?.brandName}</SpanCategory>
        <DivNameLike>
          <H3NameProduct>{singleProduct?.name}</H3NameProduct>
          <ButtonLike>
            <AiOutlineHeart size={25} />
          </ButtonLike>
        </DivNameLike>
        <SpanPrice>{singleProduct?.price}</SpanPrice>
        <SpanCor>Cor: {singleProduct?.color}</SpanCor>
        <SpanCondition>
          Condição: {singleProduct?.condition == "new" ? "Novo" : "Usado"}
        </SpanCondition>
        <SpanStock>{singleProduct?.stock} unidades disponíveis</SpanStock>
        <DivAddToCart>
          <ButtonAddToCart>Adicionar ao Carrinho</ButtonAddToCart>
        </DivAddToCart>
        <SpanSeller>Vendedor: Music Store</SpanSeller>
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
