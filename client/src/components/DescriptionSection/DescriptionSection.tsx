import { useContext } from "react";
import {
  SectionDescription,
  H3TitleDescription,
  ParagDescription,
} from "./styles";
import { ProductContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";

const DescriptionSection = () => {
  const { singleProduct } = useContext(ProductContext) as IFullProductContext;

  return (
    <SectionDescription>
      <H3TitleDescription>Descrição</H3TitleDescription>
      <ParagDescription>{singleProduct?.description}</ParagDescription>
    </SectionDescription>
  );
};

export default DescriptionSection;
