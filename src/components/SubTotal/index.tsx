import Link from "next/link";

import Colors from "@/styles/Colors";
import Button from "../Button";

import { Container } from "./styles";

interface ISubTotalProps {
  value: number;
}

export default function SubTotal({ value }: ISubTotalProps) {
  return (
    <Container>
      <span>SUBTOTAL</span>
      <strong>R$ {value.toFixed(2).toString()}</strong>
      <Link href="/checkout">
        <a>
          <Button
            color={Colors.green_01}
            title="FINALIZAR COMPRA"
            action={() => {}}
          />
        </a>
      </Link>
    </Container>
  );
}
