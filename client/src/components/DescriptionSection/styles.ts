import styled from "styled-components";
import { colors, fontSize } from "../../styled-components/root.ts";

export const SectionDescription = styled.section`
  margin: 65px 100px 65px 65px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const H3TitleDescription = styled.h3`
  color: ${colors.black};
  font-size: ${fontSize.h2h3};
  font-weight: 700;
  margin-bottom: 50px;
`;

export const ParagDescription = styled.p`
  color: ${colors.black};
  font-size: ${fontSize.text};
  line-height: 25px;
  white-space: break-spaces;
  min-width: 1200px;
`;
