import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const SectionBuy = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    flex-direction: row;
    margin: 0 30px 0 30px;
  }
`;

export const DivImg = styled.button`
  max-height: 750px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: scale 300ms;
  &:hover {
    scale: 1.10;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
`;

export const DivInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  @media (min-width: 800px) {
    gap: 30px;
    width: 40%;
  }
`;

export const DivCategories = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const SpanCategory = styled.span`
  color: ${colors.grey70};
  font-size: ${fontSize.smallLink};
  margin-bottom: -10px;

  @media (min-width: 800px) {
    margin-bottom: -20px;
  }
`;

export const H3NameProduct = styled.h3`
  color: ${colors.black};
  font-size: ${fontSize.h3};
  font-weight: 700;
  line-height: 130%;

  @media (min-width: 800px) {
    font-size: ${fontSize.h2h3};
  }
`;

export const SpanPrice = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.sub};
  font-weight: 700;

  @media (min-width: 800px) {
    font-size: ${fontSize.h2h3};
  }
`;

export const SpanCor = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
`;

export const SpanCharacteristic = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
  & > span {
    font-weight: 600;
  }
`;


export const SpanSellerName = styled.span`
  color: ${colors.purple};
  font-size: ${fontSize.text};
`;

export const DivImgsDelivery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 10px;
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
