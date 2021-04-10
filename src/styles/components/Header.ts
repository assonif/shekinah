import styled from "styled-components";
import Colors from "../Colors";
import color from "../Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem;

  @media (min-width: 768px) {
    & {
      box-shadow: 0px 1px 2px 0px ${color.neutral_color_03};
    }
    & > form {
      display: none;
    }
  }

  @media (max-width: 768px) {
    & > div > form {
      display: none;
    }
  }

  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1040px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 40vw;
      max-width: 18rem;
    }
  }
`;

export const ActionsMenu = styled.div`
  display: flex;
  div {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    cursor: pointer;

    transition: all 0.4s;

    > span {
      width: 100%;
      height: 100%;

      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  label {
    background: red;

    width: 1.2rem;
    height: 1.2rem;

    border-radius: 50%;

    margin-left: -0.4rem;

    color: ${Colors.neutral_color_01};
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-start;
  }

  div:hover {
    background: ${Colors.neutral_color_02};
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;

    color: ${Colors.neutral_color_09};
  }

  @media (min-width: 768px) {
    div {
      width: 3rem;
      height: 3rem;
    }
  }
`;
