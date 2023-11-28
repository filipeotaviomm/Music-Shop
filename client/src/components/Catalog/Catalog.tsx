import styled from "styled-components";
import { useProductContext, useUserContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";
import CardProduct from "../CardProduct";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import ManagePages from "../ManagePages/ManagePages";
import Loader from "../Loader";
import { IUserContext } from "../../types/user";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const ProductsList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 2.3rem;
  padding: 0 2rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    row-gap: 1.5rem;
    column-gap: 2rem;
  }

  @media (min-width: 836px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

function Catalog() {
  const {
    allProducts,
    getAllProducts,
    getProductsByCategory,
    getProductsByBrand,
  } = useProductContext() as IFullProductContext;
  const verifyParams = useParams();
  const { isLoading } = useUserContext() as IUserContext;

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    async function filterProducts() {
      if (!verifyParams || verifyParams.brandName === "todas") {
        const pages = await getAllProducts(1, 7);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      } else if (verifyParams.categoryName) {
        const pages = await getProductsByCategory(verifyParams.categoryName);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      } else if (verifyParams.brandName) {
        const pages = await getProductsByBrand(verifyParams.brandName);

        setNextPage(pages.nextPage);
        setPrevPage(pages.prevPage);
      }
    }

    filterProducts();
  }, [verifyParams]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : allProducts && allProducts.length > 0 ? (
        <ListContainer>
          <ProductsList>
            {allProducts!.map((product) => (
              <CardProduct item={product} key={product.id} />
            ))}
          </ProductsList>
          <ManagePages
            nextPage={nextPage}
            prevPage={prevPage}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
          />
        </ListContainer>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Catalog;
