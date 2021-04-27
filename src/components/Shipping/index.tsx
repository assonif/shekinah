import Button from "../Button";

import Colors from "@/styles/Colors";
import { Container } from "./styles";
import axios from "axios";

export default function Shipping() {
  const handleCalculateShip = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/api/correio");

    console.log(data);
  };
  return (
    <Container>
      <strong>ESTIMATIVA DE FRETE</strong>
      <span>CEP</span>

      <input type="text" />

      <Button
        color={Colors.green_01}
        title="CALCULAR"
        action={handleCalculateShip}
      ></Button>
    </Container>
  );
}
