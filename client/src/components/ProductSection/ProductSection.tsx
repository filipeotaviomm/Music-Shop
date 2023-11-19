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
import { useContext } from "react";
import { ProductContext } from "../../providers/UserContext";

const ProductSection = () => {
  const { singleProduct } = useContext(ProductContext) || {};

  return (
    <SectionBuy>
      <DivImg>
        <ImgProduct
          src="https://files2.soniccdn.com/files/2023/10/04/70s_FlyingV_Explorer-Homepage-Masthead-787x600.jpg"
          alt="Instagram logo"
        />
      </DivImg>
      <DivInfoContainer>
        <SpanCategory>Guitarra</SpanCategory>
        <DivNameLike>
          <H3NameProduct>Gibson Flying V classic</H3NameProduct>
          <ButtonLike>
            <AiOutlineHeart size={25} />
          </ButtonLike>
        </DivNameLike>
        <SpanPrice>$2000,00</SpanPrice>
        <SpanCor>Cor: Marrom</SpanCor>
        <SpanCondition>Condição: Nova</SpanCondition>
        <SpanStock>5 unidades disponíveis</SpanStock>
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
