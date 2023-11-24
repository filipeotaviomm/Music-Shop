import styled from "styled-components";
import {colors, fontSize, genericValues} from "../../../styled-components/root.ts";
import {Link} from "react-router-dom";

export const Foot = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(0px, 8vw, 200px);
  box-shadow: 0 -9px 16px 1.5px #dddddd;
  display: flex;
  justify-content: center;
  overflow-x:hidden ;
`;

export const DivContainer = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: flex;
  flex-direction: row;
  margin-block: 100px;
  padding-inline: ${genericValues.pagePadding}
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

export const AnchorMedias = styled(Link)``;

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

export const AnchorStores = styled(Link)``;

export const ImgStores = styled.img`
  width: 200px;
`;
