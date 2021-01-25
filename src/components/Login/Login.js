import React from "react";
import { Box, Button } from "grommet";
import "./Login.css";

function Login() {
  return (
    <Box
      tag="section"
      direction="column"
      align="center"
      justify="center"
      background="brand"
      animation={{ type: "slideUp", duration: 1000 }}
      pad={{ left: "medium", right: "small", vertical: "small" }}
      style={{ zIndex: "1" }}
      fill="vertical"
    >
      <h2 className="login__title">Please enter your keyword</h2>
      <input className="login__input"></input>
      <Button className="button">Submit</Button>
    </Box>
  );
}

export default Login;
