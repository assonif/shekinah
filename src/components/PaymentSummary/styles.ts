import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 2rem;
  > img {
    width: 50%;

    margin-bottom: 1rem;
  }

  > strong {
    margin-top: 0.5rem;
    font-size: 1.4rem;
  }

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;

    margin-bottom: 2rem;
    font-size: 0.9rem;
    > b {
      font-size: 1rem;
    }
  }
`;
