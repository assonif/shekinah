import Cards from "react-credit-cards";

import Input from "../Input";
import Button from "../Button";

import { Form } from "@unform/web";

import { FiChevronLeft } from "react-icons/fi";

import { Container } from "./styles";

import "react-credit-cards/es/styles-compiled.css";
import Dropdown from "../Dropdown";
import Colors from "@/styles/Colors";
import { useRef, useState } from "react";
import Validator, { creditCardSchema } from "@/schemas";

interface ICreditCardInfo {
  handleBack: any;
  setCheckoutStep: any;
  setPayment: any;
  payment: any;
}

export default function CreditCardInfo({
  handleBack,
  setCheckoutStep,
  setPayment,
  payment,
}: ICreditCardInfo) {
  const [focus, setFocus] = useState("");

  const creditCardForm = useRef(null);

  const handleFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    creditCardForm.current.setErrors({});

    try {
      await Validator(creditCardSchema, payment);

      setCheckoutStep(2);
    } catch (err) {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      creditCardForm.current.setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <header>
        <button onClick={handleBack} type="button">
          <FiChevronLeft />
        </button>

        <strong>Cartão de Crédito</strong>
      </header>

      <Cards
        cvc={payment.cvc}
        expiry={payment.expiry}
        focused={focus}
        name={payment.name}
        number={payment.number}
      />

      <Form ref={creditCardForm} onSubmit={handleSubmitButton}>
        <Input
          onChange={setPayment}
          value={payment.number}
          id="number"
          name="number"
          placeholder="Número do cartão"
          setFocus={handleFocus}
        />
        <span>
          <Input
            id="expiry"
            onChange={setPayment}
            value={payment.expiry}
            name="expiry"
            placeholder="MM/AA"
            setFocus={handleFocus}
            width={48}
          />
          <Input
            id="cvc"
            onChange={setPayment}
            value={payment.cvc}
            name="cvc"
            placeholder="CVV"
            setFocus={handleFocus}
            width={48}
          />
        </span>
        <Input
          id="name"
          onChange={setPayment}
          value={payment.name}
          name="name"
          placeholder="Titular do cartão"
          setFocus={handleFocus}
        />
        <Input
          id="cpf"
          onChange={setPayment}
          value={payment.cpf}
          name="cpf"
          placeholder="CPF do Titular"
          setFocus={handleFocus}
        />
        <Dropdown
          onChange={() => {}}
          title="Parcelar em"
          list={[
            { id: 1, title: "1x de R$ 290,00 sem juros" },
            { id: 2, title: "2x de R$ 145,00 sem juros" },
            { id: 3, title: "3x de R$ 93,45 sem juros" },
          ]}
        />

        <Button
          color={Colors.blue_01}
          title="Revisão do pedido"
          textColor={Colors.neutral_color_01}
          bold={false}
          action={handleSubmitButton}
          fontSize={1.2}
        />
      </Form>
    </Container>
  );
}
