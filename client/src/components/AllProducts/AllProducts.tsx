import ArrowLeft from "../../assets/arrow-left.svg";
import ArrowRight from "../../assets/arrow-right.svg";
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
import React, { useState } from "react";

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
  position: relative;
`;

const RoundButton = styled.button<{ $positionLeft?: boolean }>`
  outline: 2px solid ${colors.grey60};
  width: fit-content;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: ${colors.white000};

  &:hover {
    outline: 3px solid ${colors.purpleHover};
  }

  &:focus {
    outline: 3px solid ${colors.purpleHover};
  }

  top: 50%;
  left: ${(props) => (props.$positionLeft ? 0 : "none")};
  right: ${(props) => (props.$positionLeft ? "none" : 0)};
`;

type IAllProducts = {
  heading: string;
};

function AllProducts(props: IAllProducts) {
  const [page, setPage] = useState(1);
  const { getAllProducts, allProducts, productsPage } =
    useProductContext() as IFullProductContext;

  React.useEffect((): void => {
    getAllProducts(page, 4);
    console.log(productsPage);
  }, [page]);

  return (
    <Wrapper>
      <Heading>{props.heading}</Heading>
      <ProductCards>
        {allProducts &&
          allProducts.map((item: IProductContext) => (
            <CardProduct key={item.id} item={item} />
          ))}
      </ProductCards>
      {page > 1 && (
        <RoundButton
          $positionLeft={true}
          onClick={() => setPage((page) => page - 1)}
        >
          <img src={ArrowLeft} alt="productos anteriores" />
        </RoundButton>
      )}
      {productsPage.nextPage && (
        <RoundButton onClick={() => setPage((page) => page + 1)}>
          <img src={ArrowRight} alt="próximos productos" />
        </RoundButton>
      )}
    </Wrapper>
  );
}

export default AllProducts;
