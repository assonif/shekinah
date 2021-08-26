import styled from "styled-components";
import color from "@/styles/Colors";

export const Container = styled.h1`
  margin-left: 1vw;
  margin-top: 1rem;
  margin-bottom: 2rem;

  color: ${color.neutral_color_09};

  @media (min-width: 768px) {
    & {
      font-size: 2rem;
    }
  }
`;
