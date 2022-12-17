import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Toaster position="bottom-center" />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
