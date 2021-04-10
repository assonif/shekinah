import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 4rem;
  height: 4rem;

  position: fixed;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 1rem;
  right: 1rem;

  transition: all 0.5s;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.15);
  }
`;
