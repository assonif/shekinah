import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin-bottom: 1.5rem;

    > button {
      background: transparent;

      height: 2rem;
      width: 2rem;

      align-self: flex-start;

      > svg {
        font-size: 1.3rem;
      }
    }

    > strong {
      width: 100%;
      align-self: center;

      padding-right: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  form {
    padding-top: 1rem;

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

export const Form = styled.form``;
