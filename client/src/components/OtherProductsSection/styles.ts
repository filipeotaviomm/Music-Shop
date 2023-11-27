import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const SectionOtherProducts = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const H3TitleSection = styled.h3`
  color: ${colors.black};
  font-size: ${fontSize.h2h3};
  font-weight: 700;
  margin-bottom: 50px;
`;
