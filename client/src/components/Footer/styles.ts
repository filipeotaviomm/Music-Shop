import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const Foot = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(0px, 8vw, 200px);
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  width: 50%;
`;

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StoreLogo = styled.img`
  width: 150px;
`;

export const UlSocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const LiSocialMedia = styled.li`
  display: flex;
  gap: 20px;
`;

export const AnchorMedias = styled.a``;

export const ImgMediaLogos = styled.img`
  width: 30px;
  height: 30px;
`;

export const DivTerms = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const SpanTerms = styled.span`
  color: grey;
  font-size: ${fontSize.smallLink};
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 50%;
`;

export const DivColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TitleColumns = styled.h6`
  font-size: ${fontSize.sub};
  color: grey;
`;

export const UlOptions = styled.ul`
  font-size: ${fontSize.text};
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li`
  font-size: ${fontSize.smallLink};
  color: ${colors.black};
  font-weight: 500;
`;

export const UlDownload = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LiDownload = styled.li``;

export const AnchorStores = styled.a``;

export const ImgStores = styled.img`
  width: 200px;
`;
