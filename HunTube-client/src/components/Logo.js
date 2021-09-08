import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = Styled.div`
    display: flex;
    position:relative;
    left:2.5em;
    top:0.4em;
`;

export const LogoContainer = Styled.div`
  display: flex;
  align-content: stretch;
  margin:0.5em;
`;

export const LogoImg = Styled.a`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-decoration: none;
`;

export const LogoName = Styled.a`
  color: white;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  font-size: 1.5em;
  text-decoration: none;
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
          <LogoImg>
            <img src="../images/logo.png" alt="logo"></img>
          </LogoImg>
        </Link>
        <LogoName href="https://www.youtube.com/channel/UCFCddKu8YvVdLIB-bYilGPg/videos">
          HunTube
        </LogoName>
      </LogoContainer>
    </Container>
  );
};

export default Logo;
