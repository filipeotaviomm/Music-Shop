// import React from "react";
import { useProductContext } from "../../providers/UserContext";
import { IFullProductContext, IProductContext } from "../../types/product";
import styled from "styled-components";
import {
  colors,
  fontSize,
  genericValues,
} from "../../styled-components/root.ts";
import { ProductCards } from "../../styled-components/Cards.styles.ts";
import CardProduct from "../CardProduct";
import React from "react";

const Heading = styled.h2`
  font-size: ${fontSize.h3};
  font-weight: 600;
  color: ${colors.purple};
`;
const Wrapper = styled.section`
  display: grid;
  margin-block: 40px;
  margin-inline: 16px;
  padding-inline: ${genericValues.pagePadding};
  align-items: self-start;
  gap: 32px;
  width: 100%;
`;

function AllProducts() {
  const { getAllProducts, allProducts } =
    useProductContext() as IFullProductContext;

  React.useEffect((): void => {
    getAllProducts();
  }, []);

  return (
    <Wrapper>
      <Heading>Produtos em alta 🔥🔥🔥</Heading>
      <ProductCards>
        {allProducts &&
          allProducts.map((item: IProductContext) => (
            <CardProduct
              key={item.id}
              item={item}
              name={item.name}
              brand={item.brand}
              image={item.image}
              price={item.price}
            />
          ))}
      </ProductCards>
    </Wrapper>
  );
}

export default AllProducts;
