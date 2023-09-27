import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./styles/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles.js";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);
