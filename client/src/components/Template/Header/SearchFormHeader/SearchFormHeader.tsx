import {
  Label,
  SearchBar,
  SearchWrapper,
} from "../../../../styled-components/Header.styles.tsx";
import { Search } from "react-feather";
import React from "react";

function SearchFormHeader() {
  const [searchValue, setSearchValue] = React.useState("");
  const id = React.useId();
  return (
    <SearchWrapper>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Label htmlFor={`${id}-search`}>BUSCAR:</Label>
        <Search style={{ position: "absolute", left: "8px", top: "30%" }} />
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
