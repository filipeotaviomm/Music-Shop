import DescriptionSection from "../../components/DescriptionSection";
import OtherProductsSection from "../../components/OtherProductsSection";
import ProductSection from "../../components/ProductSection";
import { Div } from "./styles";

const ProductPage = () => {
  return (
    <Div>
      <ProductSection />
      <OtherProductsSection />
      <DescriptionSection />
    </Div>
  );
};

export default ProductPage;
