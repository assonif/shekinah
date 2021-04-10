import { Container } from "./styles";

interface ButtonProps {
  title: string;
  color: string;
  action: any;
  width?: number;
  height?: number;
  children?: any;
  textColor?: string;
  bold?: boolean;
  fontSize?: number;
}

export default function Button({
  action,
  color,
  title,
  width = 100,
  height = 3,
  children,
  textColor,
  bold = true,
  fontSize = 1,
}: ButtonProps) {
  return (
    <Container
      bold={bold}
      textColor={textColor}
      color={color}
      onClick={action}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
      {title}
    </Container>
  );
}
