import styled from "styled-components";
import Colors from "../Colors";

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    > ul {
      width: 65%;
      margin-right: 2rem;
    }
    > div {
      width: 35%;
    }
  }
`;
