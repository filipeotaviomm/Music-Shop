import styled from "styled-components";
import {
  colors,
  fontSize,
  genericValues,
} from "../../../styled-components/root.ts";
import { Link } from "react-router-dom";

export const Foot = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0 clamp(0px, 8vw, 200px);
  box-shadow: 0 -9px 16px 1.5px #dddddd;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

export const DivContainer = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-inline: ${genericValues.pagePadding};
  gap: 40px;

  @media (min-width: 800px) {
    gap: 80px;
  }
`;

export const DivUp = styled.div`
  width: 100%;
  max-width: ${genericValues.pageWidth};
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding-inline: ${genericValues.pagePadding};
  gap: 50px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UlSocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 300px;
`;

export const LiSocialMedia = styled.li`
  display: flex;
  gap: 20px;
`;

export const AnchorMedias = styled(Link)``;

export const ImgMediaLogos = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 800px) {
    width: 35px;
    height: 35px;
  }
`;

export const DivDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const SpanTerms = styled.span`
  color: grey;
  font-size: ${fontSize.smallLink};
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 50%;
  }
`;

export const DivColumns = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  gap: 15px;

  @media (min-width: 800px) {
    min-width: 220px;
  }
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
  gap: 10px;
`;

export const LiDownload = styled.li``;

export const AnchorStores = styled(Link)``;

export const ImgStores = styled.img`
  width: 180px;

  @media (min-width: 800px) {
    width: 200px;
  }
`;
