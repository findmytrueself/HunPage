import React from "react";
import { StyledBurger } from "./Burger.styled";
const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <StyledBurger
      menuOpen={menuOpen}
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
