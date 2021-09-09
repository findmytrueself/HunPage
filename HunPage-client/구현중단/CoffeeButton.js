import React from "react";
import Styled from "styled-components";

export const CoffeeTag = Styled.img`
height: 50px !important;
width: 175px !important;
position: relative;
left:0.5em;
margin: 0.2em;
`;

const CoffeeButton = () => {
  return (
    <div>
      <a
        href="https://www.buymeacoffee.com/instantcoffee"
        target="_blank"
        rel="noreferrer"
      >
        <CoffeeTag
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </a>
    </div>
  );
};
export default CoffeeButton;
