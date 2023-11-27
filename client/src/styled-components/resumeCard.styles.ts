import styled from "styled-components";
import {colors} from "./root.ts";

export const Card = styled.div`
  width: 100%;
  border-top: 2px solid ${colors.purple};
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const CardTitle = styled.h3`
  color: ${colors.grey40};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const CartContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartButtons = styled.div`
  display: flex;
  align-self: end;
  gap: 20px;
`;

export const Button = styled.button`
  color: ${colors.red60};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;