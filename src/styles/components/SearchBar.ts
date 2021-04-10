import styled from "styled-components";
import color from "../Colors";

export const Container = styled.form`
  width: 100%;
  max-width: 20rem;
  height: 2rem;

  margin-top: 1rem;

  display: flex;

  border-radius: 1rem;
  border: solid 1px ${color.neutral_color_04};
  background: ${color.neutral_color_02};

  > input {
    margin-left: 1rem;
    width: 100%;
    height: 100%;

    background: ${color.neutral_color_02};
    color: ${color.neutral_color_09};
  }

  > input::placeholder {
    color: ${color.neutral_color_07};
  }

  > button {
    height: 100%;
    width: 2.5rem;

    border-radius: 0 1rem 1rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${color.neutral_color_03};

    > svg {
      color: ${color.neutral_color_09};
    }
  }

  @media (min-width: 768px) {
    & {
      margin-top: 0;
    }
  }
`;
