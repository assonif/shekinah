import Colors from "@/styles/Colors";
import styled from "styled-components";

interface ContainerProps {
  color: string;
  width: number;
  textColor: string;
  bold: boolean;
  height: number;
  fontSize: number;
}

export const Container = styled.button<ContainerProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}rem;
  background: ${(props) => props.color};

  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : 1)}rem;

  cursor: pointer;

  transition: all 0.4s;

  color: ${(props) =>
    props.textColor ? props.textColor : Colors.neutral_color_09};

  > svg {
    margin-right: 0.3rem;
  }

  &:hover {
    box-shadow: 2px 2px 5px 1px ${Colors.neutral_color_04};
  }
`;
