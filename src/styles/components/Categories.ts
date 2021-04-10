import styled from "styled-components";
import color from "../Colors";

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  background: red;

  margin-left: 1rem;

  padding: 12px;

  cursor: pointer;

  /* border: 1px solid ${color.neutral_color_03}; */
  border-radius: 10px;
  background: ${color.neutral_color_09};

  font-weight: 500;

  > a {
    color: ${color.neutral_color_01};
  }

  &:first-child {
    margin-left: 0;
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
