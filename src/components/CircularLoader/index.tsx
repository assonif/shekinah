import React from "react";

import { Container } from "./styles";

const CircularLoader: React.FC = () => {
  return (
    <Container id="loader">
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default CircularLoader;
