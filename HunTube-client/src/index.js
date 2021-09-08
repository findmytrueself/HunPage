import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled-components/theme";
import { GlobalStyles } from "./styled-components/global";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
