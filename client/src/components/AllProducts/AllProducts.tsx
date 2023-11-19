import React from "react";
import { useProductContext } from "../../providers/UserContext";
import { IFullProductContext } from "../../types/product";
import { nanoid } from "nanoid";

function AllProducts() {
  const { getAllProducts, allProducts } =
    useProductContext() as IFullProductContext;

  React.useEffect(() => {
      console.log("aqui sim")
    getAllProducts();
    console.log(allProducts)
  }, []);

  return (
    <>
      <ol>
        {allProducts &&
          allProducts.map(({ brand, image, price, name }) => (
            <li key={nanoid()}>
              <h3>{brand}</h3>
              <h3>{name}</h3>
              <div>
                <img src={image} />
              </div>
              <span>{price}</span>
            </li>
          ))}
      </ol>
    </>
  );
}

export default AllProducts;
