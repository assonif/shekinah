import Link from "next/link";

import Button from "@/components/Button";
import Colors from "@/styles/Colors";

import { Container } from "./styles";

interface IPaymentSummaryProps {
  image: string;
  title: string;
  message?: any;
  route: string;
  button: string;
}
const PaymentSummary = ({
  image,
  title,
  message,
  button,
  route,
}: IPaymentSummaryProps) => {
  return (
    <Container>
      <img src={image} alt="Pagamento concluido" />
      <strong>{title}</strong>
      {message}
      <Link href={route}>
        <a>
          <Button
            color={Colors.neutral_color_09}
            title={button}
            textColor={Colors.neutral_color_01}
            action={() => {}}
          />
        </a>
      </Link>
    </Container>
  );
};

export default PaymentSummary;
