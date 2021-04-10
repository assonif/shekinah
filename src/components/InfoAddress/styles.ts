import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2rem;

    > strong {
      margin-bottom: 1rem;
    }

    > span {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
    }

    > button {
      margin-top: 2rem;
    }
  }
`;
