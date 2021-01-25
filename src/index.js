import React from "react";
import { Grommet } from "grommet";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

const theme = {
  global: {
    font: {
      family: "Halant",
      size: "18px",
      height: "20px",
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
