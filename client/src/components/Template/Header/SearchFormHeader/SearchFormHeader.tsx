import {
  Label,
  SearchBar,
  SearchWrapper,
} from "../../../../styled-components/Header.styles.tsx";
import { Search } from "react-feather";
import React from "react";
import { useProductContext } from "../../../../providers/UserContext/ProductProvider.tsx";
import { IFullProductContext } from "../../../../types/product";
import { useNavigate } from "react-router-dom";

function SearchFormHeader() {
  const [searchValue, setSearchValue] = React.useState("");
  const id = React.useId();
  const navigate = useNavigate();

  const { searchProduct } = useProductContext() as IFullProductContext;

  const handleSubmit = () => {
    navigate('/catalog');
    searchProduct(searchValue);
  }

  return (
    <SearchWrapper>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit()
        }}
      >
        <Label htmlFor={`${id}-search`}>BUSCAR:</Label>
        <Search style={{ position: "absolute", left: "8px", top: "21%" }} onClick={() => handleSubmit()}/>
        <SearchBar
          id={`${id}-search`}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          name={`${id}-search`}
        />
      </form>
    </SearchWrapper>
  );
}

export default SearchFormHeader;
