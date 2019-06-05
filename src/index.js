import React from "react";
import { render } from "react-dom"
import Storefy from "./components";
import ThemeProvider from "./components/theme-provider";
import "./styles/style.scss";

const elem = document.querySelector("#app");

const theme = 'dark';

render(
  <ThemeProvider theme={theme}>
    <Storefy text="Hello, world!" />
  </ThemeProvider>
, elem);
