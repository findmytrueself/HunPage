import React from "react";
import Styled from "styled-components";
import Logo from "../components/Logo";
export const Container = Styled.div`
    border:solid #FFF;
`;
export const TitleColumn = Styled.div`
    display: flex;
    flex-direction:column;
`;
const HomePage = () => {
  return (
    <>
      <Logo />
      <Container>
        <TitleColumn>hello world</TitleColumn>
      </Container>
    </>
  );
};

export default HomePage;
