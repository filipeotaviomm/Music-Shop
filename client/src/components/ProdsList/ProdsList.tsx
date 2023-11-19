import ProdsCard from "./ProdsCard";
import { DivContainer, UlProducts } from "./styles";

const ProdsList = () => {
  return (
    <DivContainer>
      <UlProducts>
        <ProdsCard />
      </UlProducts>
    </DivContainer>
  );
};

export default ProdsList;
