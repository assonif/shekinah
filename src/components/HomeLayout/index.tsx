import { Container } from "./styles";

export default function HomeLayout({ children }) {
  return (
    <Container>
      <div style={{ gridArea: "first" }}>{children[0]}</div>
      <div style={{ gridArea: "second" }}>{children[1]}</div>
      <div style={{ gridArea: "third" }}>{children[2]}</div>
      <div style={{ gridArea: "fourth" }}>{children[3]}</div>
    </Container>
  );
}
