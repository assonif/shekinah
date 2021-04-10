import Button from "../Button";

import Colors from "@/styles/Colors";
import { Container } from "./styles";

export default function Shipping() {
  return (
    <Container>
      <strong>ESTIMATIVA DE FRETE</strong>
      <span>CEP</span>

      <input type="text" />

      <Button
        color={Colors.green_01}
        title="CALCULAR"
        action={() => {}}
      ></Button>
    </Container>
  );
}
