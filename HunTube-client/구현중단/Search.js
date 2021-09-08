import React from "react";
import styled from "styled-components";
import CoffeeButton from "./CoffeeButton";
import Logo from "../src/components/Logo";
export const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
  left: 3em;
  top: 0.5em;
  flex-wrap: wrap;
  background: black;
  position: relative;
`;

export const SearchBar = styled.input`
  width: 63vw;
  bottom: 0.1em;
  margin: 1em;
  font-size: 1.1em;
`;

export const SearchButton = styled.button`
  background: black;
  display: flex;
  align-items: center;
  border: none;
  position: relative;
  z-index: 1;
  width: 3rem;
  height: 3rem;
  margin: 0.2em;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  /* box-shadow: inset 0 0 0 0 #2f3542; */
  transition: 0.3s ease-out;
  outline: none;

  &:hover {
    background-color: #2f3640;
  }
  &:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    /* content: ""; */
    background-color: #2f3640;
  }
  &:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export const SearchButtonImg = styled.span`
  width: 0.1em;
  height: 0.1em;
  position: relative;
  bottom: 1.5em;
  right: 0.4em;
  transform: translate(-50%, -50%);
`;

const Search = ({ searchButtonClick, setSearchText }) => {
  return (
    <Container>
      <Logo />
      <SearchBar
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton onClick={(e) => searchButtonClick(e)}>
        <SearchButtonImg>
          <img src="../images/search.png" alt="search"></img>
        </SearchButtonImg>
      </SearchButton>
      <CoffeeButton />
    </Container>
  );
};

export default Search;
