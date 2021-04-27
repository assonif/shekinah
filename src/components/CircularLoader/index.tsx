import React from "react";

import { Container } from "./styles";

interface ICircularLoaderProps {
  color?: string;
}

const CircularLoader = ({ color }: ICircularLoaderProps) => {
  return (
    <Container color={color} id="loader">
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default CircularLoader;
