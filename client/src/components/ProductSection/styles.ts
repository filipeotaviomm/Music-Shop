import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const SectionBuy = styled.section`
  margin: 65px 100px 10px 65px;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DivImg = styled.div`
  width: 40%;
  max-height: 600px;

  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
  max-width: 650px;
  // flex-grow: 1;
`;

export const DivInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  width: 40%;

  @media (min-width: 800px) {
    gap: 30px;
    margin-top: 0;
  }
`;

export const SpanCategory = styled.span`
  color: ${colors.grey70};
  font-size: ${fontSize.smallLink};
  margin-bottom: -5px;

  @media (min-width: 800px) {
    margin-bottom: -20px;
  }
`;

export const DivNameLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const H3NameProduct = styled.h3`
  color: ${colors.black};
  font-size: ${fontSize.h2h3};
  font-weight: 700;
`;

export const ButtonLike = styled.button``;

export const SpanPrice = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.h3};
  font-weight: 700;
`;

export const SpanCor = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
`;

export const SpanCondition = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
`;

export const SpanStock = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
`;

export const DivAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonAddToCart = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 20px;
  background-color: red;
  color: white;
  border-radius: 5px;
  color: ${colors.white000};
  font-size: ${fontSize.h3};
  font-weight: 700;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const SpanSeller = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
`;

export const DivImgsDelivery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media (min-width: 800px) {
    margin-top: -10px;
  }
`;

export const DivImgTextDelivery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
`;

export const ImgDelivery = styled.img`
  width: 50px;
`;

export const SpanDelivery = styled.span`
  color: ${colors.grey70};
  font-size: ${fontSize.text};
`;

export const DivImgTextShipping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ImgShipping = styled.img`
  width: 70px;
`;

export const SpanShipping = styled.span`
  color: ${colors.grey70};
  font-size: ${fontSize.text};
`;
