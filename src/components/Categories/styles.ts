import styled from "styled-components";
import color from "@/styles/Colors";

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  background: red;

  margin-left: 1rem;

  cursor: pointer;

  /* border: 1px solid ${color.neutral_color_03}; */
  border-radius: 10px;
  background: ${color.neutral_color_09};

  font-weight: 600;

  transition: border-radius 0.4s ease-out, background 0.4s;

  &:first-child {
    background: ${color.green_01};
    margin-left: 0;

    > a {
      transition: color 0.4s;
      color: ${color.neutral_color_09};
    }

    &:hover {
      background: #2de1c2;
    }
  }

  > a {
    width: 100%;
    height: 100%;
    color: ${color.neutral_color_01};
  }

  span {
    width: 100%;
    height: 100%;

    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    border-radius: 1.5rem;
  }

  @media (min-width: 768px) {
    & {
      min-width: 120px;
    }
  }
`;

export const BarContainer = styled.nav`
  margin: 0 auto;

  display: flex;
  justify-content: center;

  > ul {
    display: flex;

    overflow-x: auto;
  }

  @media (max-width: 768px) {
    > ul::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }

  @media (min-width: 768px) {
    & {
      margin: 2rem auto 1.5rem;
    }
  }
`;
