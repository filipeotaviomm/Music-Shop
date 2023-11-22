import styled from "styled-components";
import { colors, fontSize } from "../../../styled-components/root.ts";

export const LiProducts = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  // min-width: 250px;
  width: 200px;
  height: 380px;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ImgProduct = styled.img`
  width: 100%;
  max-width: 200px;
  min-width: 200px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  // object-fit: cover;
`;

export const SpanName = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
  margin-top: 10px;
  max-width: 180px;
  white-space: pre-wrap;
  text-align: center;
`;

export const ImgStars = styled.img`
  width: 100px;
`;

export const SpanPrice = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.sub};
  font-weight: 700;
  margin-bottom: 20px;
`;

// -----------------------

export const LiProducts1 = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  // min-width: 250px;
  width: 200px;
  height: 380px;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const ImgProduct1 = styled.img`
  width: 100%;
  max-width: 200px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  // object-fit: cover;
`;

export const SpanName1 = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.text};
  margin-top: 10px;
  max-width: 180px;
  white-space: pre-wrap;
  text-align: center;
`;

export const ImgStars1 = styled.img`
  width: 100px;
`;

export const SpanPrice1 = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.sub};
  font-weight: 700;
  margin-bottom: 20px;
`;
