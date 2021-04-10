import { Container, ItemContainer } from "./styles";

interface ICheckoutStepsProps {
  checkoutStep: number;
  setCheckoutStep: any;
}

export default function CheckoutSteps({
  checkoutStep,
  setCheckoutStep,
}: ICheckoutStepsProps) {
  const returnStep = (value) => {
    if (value < checkoutStep) {
      setCheckoutStep(value);
    }
  };

  return (
    <Container>
      <ItemContainer
        onClick={() => {
          returnStep(0);
        }}
        isSelected={checkoutStep === 0}
      >
        1. Entrega
      </ItemContainer>
      <ItemContainer
        onClick={() => returnStep(1)}
        isSelected={checkoutStep === 1}
      >
        2. Pagamento
      </ItemContainer>
      <ItemContainer
        onClick={() => returnStep(2)}
        isSelected={checkoutStep === 2}
      >
        3. Resumo
      </ItemContainer>
    </Container>
  );
}
