import React from "react";
import { Box } from "grommet";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import "./Main.css";

function Main() {
  return (
    <Box flex fill="vertical">
      <Route exact path="/">
        <Login />
      </Route>
    </Box>
  );
}

export default Main;
