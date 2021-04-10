import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  > p {
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    & {
      margin-top: 4rem;

      > span {
        font-weight: bold;
      }
    }
  }
`;
