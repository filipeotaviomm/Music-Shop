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
  SpanSellerName,
  DivImgsDelivery,
  DivImgTextDelivery,
  ImgDelivery,
  SpanDelivery,
  DivImgTextShipping,
  ImgShipping,
  SpanShipping,
  SpanCharacteristic,
} from "./styles";
import React, { useContext, useEffect } from "react";
import { ProductContext, useCartContext } from "../../providers/UserContext";
// import { useParams } from "react-router-dom";
import { IFullProductContext } from "../../types/product";
import { SendBtn } from "../../styled-components/Button.styles.ts";
import { ICartContext } from "../../types/cart";
import { nanoid } from "nanoid";
import Modal from "../Modal";
import { useParams } from "react-router-dom";

const ProductSection = () => {
  const [showImage, setShowImage] = React.useState(false);

  const { singleProduct, getProductById } = useContext(
    ProductContext,
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

  const finalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(singleProduct?.price);

  return (
    <SectionBuy>
      {
        <Modal
          maxWidth={"100svw"}
          overflow={"scroll"}
          open={showImage}
          onOpenChange={setShowImage}
          element={
            <ImgProduct src={singleProduct?.image} alt="Product Image" />
          }
        />
      }
      <DivImg onClick={() => setShowImage(!showImage)}>
        <ImgProduct src={singleProduct?.image} alt="Product Image" />
      </DivImg>
      <DivInfoContainer>
        <DivCategories>
          {singleProduct?.categories.map((category) => (
            <SpanCategory key={nanoid()}>{category}</SpanCategory>
          ))}
        </DivCategories>
        <H3NameProduct>{singleProduct?.name}</H3NameProduct>

        <SpanCharacteristic>
          <span>Preço: </span>
          {finalPrice}
        </SpanCharacteristic>

        {singleProduct?.color && (
          <SpanCharacteristic>
            <span>Cor:</span> {singleProduct?.color}
          </SpanCharacteristic>
        )}

        <SpanCharacteristic>
          <span>Condição:</span>{" "}
          {singleProduct?.condition == "new" ? "Novo" : "Usado"}
        </SpanCharacteristic>
        <SpanCharacteristic>
          <span>
            {singleProduct?.stock > 1
              ? `Unidades disponíveis: ${singleProduct?.stock}`
              : "Última unidade"}
          </span>
        </SpanCharacteristic>
        <SpanCharacteristic>
          <span>Vendedor:</span>{" "}
          <SpanSellerName>{singleProduct?.owner.name}</SpanSellerName>
        </SpanCharacteristic>
        <SendBtn onClick={() => addProductInCart(singleProduct)}>
          Adicionar ao Carrinho
        </SendBtn>

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
