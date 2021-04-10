import Colors from "@/styles/Colors";
import styled from "styled-components";

interface IContainerProps {
  shouldHasCTA: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5rem;

  padding: 0.8rem;

  > button {
    opacity: ${(props) => (props.shouldHasCTA ? 1 : 0)};
    background: transparent;
    margin-left: 0.6rem;
    color: ${Colors.blue_01};
  }

  > div {
    display: flex;
    align-items: center;
    > span {
      margin-right: 0.6rem;
    }
    display: flex;

    > div > p {
      font-size: 0.8rem;
    }
  }

  &:first-child {
    border-bottom: 1px solid ${Colors.neutral_color_03};
  }
`;
