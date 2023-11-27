import DescriptionSection from "../../components/DescriptionSection";
import OtherProductsSection from "../../components/OtherProductsSection";
import ProductSection from "../../components/ProductSection";
import { Div } from "./styles";

const ProductPage = () => {
  return (
    <Div>
      <ProductSection />
      <DescriptionSection />
      <OtherProductsSection />
    </Div>
  );
};

export default ProductPage;
