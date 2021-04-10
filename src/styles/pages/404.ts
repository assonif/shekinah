import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 2rem;
    width: 10rem;
    height: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    overflow: hidden;

    transition: all 0.4s;

    > img {
      width: 100%;
      transform: rotate(90deg);
    }
  }

  > strong {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  a {
    margin-top: 2rem;
    width: 100%;
    max-width: 30rem;
  }

  @media (min-width: 768px) {
    > div {
      width: 15rem;
      height: 15rem;
    }
  }
`;
