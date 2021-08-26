import styled from "styled-components";
import color from "@/styles/Colors";

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  background: red;

  margin-left: 1rem;
  margin-bottom: 1rem;

  cursor: pointer;

  /* border: 1px solid ${color.neutral_color_03}; */
  border-radius: 10px;
  background: ${color.neutral_color_09};

  font-weight: 600;

  white-space: nowrap;

  transition: border-radius 0.4s ease-out, background 0.4s;

  &:first-child {
    background: transparent;
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
  }

  @media (max-width: 768px) {
    > ul::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    > ul {
      overflow-x: auto;
    }
  }

  @media (min-width: 768px) {
    & {
      margin: 2rem auto 0px;
    }

    > ul {
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;

      max-width: 100%;
    }
  }
`;
