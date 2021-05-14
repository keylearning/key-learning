import React from "react";
import styled from "styled-components";
import SearchImage from "./assets/search.png";

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 14px;
`;

const Search = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  margin-left: 25px;
  font-size: 18px;
  color: rgba(118, 87, 254, 1);
  &::placeholder {
    color: rgba(118, 87, 254, 0.5);
  }
  &:focus {
    outline: none;
  }
`;

const SearchBar = props => {
  const { className } = props;
  return (
    <div className={className}>
      <SearchIcon src={SearchImage} alt="search" />
      <Search type="text" placeholder="Search" />
    </div>
  );
};

export default styled(SearchBar)`
  display: flex;
  align-items: center;
  margin-left: 22px;
  width: 100%;
  max-width: 817px;
  height: 36px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0px 4px 40px rgba(118, 87, 254, 0.15);
`;
