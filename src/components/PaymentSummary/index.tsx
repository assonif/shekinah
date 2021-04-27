import Button from "@/components/Button";
import Colors from "@/styles/Colors";

import { Container } from "./styles";

interface IPaymentSummaryProps {
  image: string;
  title: string;
  message: any;
}
const PaymentSummary = ({ image, title, message }: IPaymentSummaryProps) => {
  return (
    <Container>
      <img src={image} alt="Pagamento concluido" />
      <strong>{title}</strong>
      {message}
      <Button
        color={Colors.neutral_color_09}
        title="Acompanhar meu pedido"
        textColor={Colors.neutral_color_01}
        action={() => {}}
      ></Button>
    </Container>
  );
};

export default PaymentSummary;
