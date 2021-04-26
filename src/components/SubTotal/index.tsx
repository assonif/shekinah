import { useContext } from "react";
import Link from "next/link";

import axios from "axios";

import Colors from "@/styles/Colors";
import Button from "../Button";

import { Container } from "./styles";
import { cartStore } from "@/stores/cart";

interface ISubTotalProps {
  value: number;
}

export default function SubTotal({ value }: ISubTotalProps) {
  const cartContext = useContext(cartStore);

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
