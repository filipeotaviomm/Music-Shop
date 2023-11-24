import ProdsList from "../ProdsList";
import { SectionOtherProducts, H3TitleSection } from "./styles";

const OtherProductsSection = () => {
  return (
    <SectionOtherProducts>
      <H3TitleSection>Veja também</H3TitleSection>
      <ProdsList />
    </SectionOtherProducts>
  );
};

export default OtherProductsSection;
