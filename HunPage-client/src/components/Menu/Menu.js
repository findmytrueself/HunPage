import React from "react";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ menuOpen }) => {
  return (
    <StyledMenu menuOpen={menuOpen}>
      <a href="/about">
        <span role="img" aria-label="about us">
          {/* &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f; */}
        </span>
        About ME
      </a>
      <a href="/portfolio">
        <span role="img" aria-label="my page">
          {/* &#x1f4b8; */}
        </span>
        PortFolio
      </a>
      <a href="/contact">
        <span role="img" aria-label="contact">
          {/* &#x1f4e9; */}
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};

export default Menu;
