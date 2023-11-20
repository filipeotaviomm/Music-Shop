// import React from "react";
import {useProductContext} from "../../providers/UserContext";
import {IFullProductContext} from "../../types/product";
import styled from "styled-components";
 import {colors, fontSize, genericValues} from "../../styled-components/root.ts";
import {ProductCards} from "../../styled-components/Cards.styles.ts";
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
    const {getAllProducts, allProducts} = useProductContext() as IFullProductContext;

    React.useEffect( ():void => {
        getAllProducts()

    }, []);

    return (
        <Wrapper>
            <Heading>Produtos em alta 🔥🔥🔥</Heading>
            <ProductCards>
                {allProducts &&
                    allProducts.map(({id, name, price, image, brand}) => (
                        <CardProduct
                            key={id}
                            name={name}
                            price={price}
                            image={image}
                            brand={brand}
                        />
                    ))}
            </ProductCards>
        </Wrapper>
    );
}

export default AllProducts;
