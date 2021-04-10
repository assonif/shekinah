import { Container } from "./styles";

interface AccordionProps {
  title: string;
  content: string;
}

export default function Accordion({ title, content }: AccordionProps) {
  return (
    <Container>
      <span>{title}</span>
      <p>{content}</p>
    </Container>
  );
}
