import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    display: flex;
    position:relative;
    top:0.2em;
    left:2.5em;
`;

export const LogoContainer = Styled.div`
  margin:0;
  padding:0;
  display: flex;
  width:8vw;
  position: relative;
  top:0.1em;
`;

export const LogoImg = Styled.img`
  text-decoration: none;
  width:100%;
  height:100%;
  position: relative;
  top:0.4em;

`;

export const LogoWrapper = Styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <LogoImg src="../images/logo.png" alt="logo"></LogoImg>
        </Link>
      </LogoContainer>
    </Container>
  );
};

export default Logo;
