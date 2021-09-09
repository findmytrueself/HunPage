import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import { useOnClickOutside } from "./hooks/hooks";

export const BurgerWrapper = Styled.div`
  background-color : black;
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));
  return (
    <>
      <BurgerWrapper ref={node}>
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} />
      </BurgerWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AboutMePage />
          </Route>
          <Route path="/about">
            <AboutMePage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
