import Link from "next/link";

import Colors from "@/styles/Colors";
import Button from "../Button";

import { Container } from "./styles";

interface ISubTotalProps {
  value: number;
}

export default function SubTotal({ value }: ISubTotalProps) {
  // Configura credenciais

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
      <script
        src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
        data-preference-id="TEST-c416bc36-7eda-4a67-9d1b-5830017d40fa"
      ></script>
    </Container>
  );
}
