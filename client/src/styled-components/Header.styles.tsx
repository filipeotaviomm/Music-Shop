import styled from "styled-components";
import { colors, fontSize } from "./root.ts";
import { DefaultLabel } from "./Modal.styles.tsx";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


export const SearchBar = styled.input`
  border: 2px solid ${colors.black};
  border-radius: 4px;
  font-size: ${fontSize.link};
  padding-block: 0.3rem;
  padding-inline-start: 40px;
  min-width: 200px;
  width: 100%;
  max-width: 640px;

  &:focus {
    border: 2px solid ${colors.purpleSurface};
    outline: 2px solid ${colors.purple}
  }
`;

export const LogoTop = styled.img`
  margin: auto;
  margin-block-end: 32px;
`;
export const ProfileIcon = styled.img<{ $bgColor?: boolean }>`
  background-color: ${(props) => props.$bgColor && colors.grey};
  padding: 16px;
  border-radius: 20px;
  &:hover {
    outline: 2px solid ${colors.purpleHover}
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export const Category = styled.li`
  padding-block: 4px;
  font-weight: 500;

  &:hover > * {
    color: ${colors.purpleHover};
  }

  z-index: 1;
`;

export const InfoWrapper = styled.div`
  display: grid;
  gap: 20px;
  place-items: center;
  padding-inline: clamp(2%, 24px, 25%);
  max-width: 1440px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    margin-inline: 32px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100dvw;
  padding-block-start: 24px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
  hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`;
export const HeaderWrapper = styled.div`
  max-width: 1440px;
width: 100%;
  margin-block-end: 24px;
`
export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const CategoriesWrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Label = styled(DefaultLabel)`
  position: absolute;
  top: -28px;
`;
export const CartQuantity = styled.span`
  position: absolute;
  top: -16px;
  right: -10px;
  background-color: ${colors.purple};
  color: ${colors.offWhite};
  border-radius: 100%;
  padding: 8px;
  font-size: ${fontSize.icons};
`;
export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
`;

export const DContent = styled(DropdownMenu.Content)`
  min-width: 200px;
  background-color: white;
  border-radius: 6px;
  padding: 8px;
  padding-block: 16px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`
export const DSubTrigger = styled(DropdownMenu.SubTrigger)`
  cursor: pointer;
        &:hover {
    outline: 2px solid ${colors.purpleHover};
  }
`
export const DItem = styled(DropdownMenu.Item)`
  padding-block: 4px;
  font-weight: 500;
  background-color: ${colors.white000};
  padding-block-end: 8px;
  padding-inline: 8px;

      &:hover {
    outline: 2px solid ${colors.purpleHover};
  }

  z-index: 1;
`
export const DSeparator = styled(DropdownMenu.Separator)`
  height: 2px;
  color: ${colors.purpleSurface};
`
export const DSubContent = styled(DropdownMenu.SubContent)`
  font-width: 400;
  width: auto;
  max-width: 14ch;
  background-color: white;
  border-radius: 6px;
  padding-inline: 8px;
  padding-block: 16px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`
