import Colors from "@/styles/Colors";
import styled from "styled-components";

export const Container = styled.div`
  height: 2.5rem;
  width: 100%;

  color: ${Colors.neutral_color_05};
  border: 1px solid ${Colors.neutral_color_03};

  background-color: ${Colors.neutral_color_02};
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 4px 8px ${Colors.neutral_color_04};
  }

  > button {
    width: 100%;
    height: 100%;

    background-color: ${Colors.neutral_color_02};
    border-radius: 8px;

    display: flex;
    align-items: center;

    > svg {
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.8rem;
    }
  }

  > button > div {
    display: flex;
    align-items: center;

    padding: 0.8rem;
    width: 100%;
    height: 100%;

    font-size: 16px;
    line-height: 1.5;

    color: ${Colors.neutral_color_06};
  }
`;

export const ListContainer = styled.div`
  position: relative;
  width: 100%;

  color: ${Colors.neutral_color_05};
  border: 1px solid ${Colors.neutral_color_03};

  background-color: ${Colors.neutral_color_02};
  border-radius: 0 0 8px 8px;

  > button {
    width: 100%;
    height: 2rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 0 1rem;

    color: ${Colors.neutral_color_08};
  }
`;
