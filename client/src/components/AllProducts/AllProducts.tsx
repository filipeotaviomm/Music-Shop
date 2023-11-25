// import React from "react";
import {useProductContext} from "../../providers/UserContext";
import {IFullProductContext, IProductContext} from "../../types/product";
import styled from "styled-components";
import {
    colors,
    fontSize,
    genericValues,
} from "../../styled-components/root.ts";
import {ProductCards} from "../../styled-components/Cards.styles.ts";
import CardProduct from "../CardProduct";
import React, {useState} from "react";

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
type IAllProducts = {
    heading: string
}

function AllProducts(props:IAllProducts) {
    const [page, setPage] = useState(0)
    const {getAllProducts, allProducts, productsPage} =
        useProductContext() as IFullProductContext;

    React.useEffect((): void => {
        getAllProducts(page, 4);
        console.log(productsPage)
    }, [page]);

    return (
        <Wrapper>
            <Heading>{props.heading}</Heading>
            <ProductCards>
                {allProducts &&
                    allProducts.map((item: IProductContext) => (
                        <CardProduct
                            key={item.id}
                            item={item}
                        />
                    ))}
            </ProductCards>
            <button onClick={() => setPage((page) => page - 1)}>-</button>
            <button onClick={() => setPage((page) => page + 1)}>+</button>
        </Wrapper>
    );
}

export default AllProducts;
