import Colors from "@/styles/Colors";
import styled, { css } from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

interface IItemContainerProps {
  isSelected: boolean;
}

export const ItemContainer = styled.div<IItemContainerProps>`
  margin-top: 1rem;
  width: 33%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${Colors.neutral_color_05};

  font-weight: bold;
  font-size: 0.8rem;

  ${(props) =>
    props.isSelected &&
    css`
      & {
        color: ${Colors.blue_01};
        border-bottom: 2px solid ${Colors.blue_01};
      }
    `}
`;
