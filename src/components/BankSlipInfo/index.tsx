import Input from "../Input";
import Button from "../Button";

import { Form } from "@unform/web";

import Validator, { bankSlipSchema } from "@/schemas";

import { useRef } from "react";

import { FiChevronLeft } from "react-icons/fi";

import Colors from "@/styles/Colors";

import { Container } from "./styles";

interface IBankSlip {
  handleBack: any;
  setCheckoutStep: any;
  bankSlip: any;
  setBankSlip: any;
}
export default function BankSlipInfo({
  handleBack,
  setCheckoutStep,
  setBankSlip,
  bankSlip,
}: IBankSlip) {
  const bankSlipForm = useRef(null);

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    bankSlipForm.current.setErrors({});

    try {
      await Validator(bankSlipSchema, bankSlip);

      setCheckoutStep(2);
    } catch (err) {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      bankSlipForm.current.setErrors(validationErrors);
    }
  };
  return (
    <Container>
      <header>
        <button onClick={handleBack} type="button">
          <FiChevronLeft />
        </button>

        <strong>Boleto bancário</strong>
      </header>

      <Form ref={bankSlipForm} onSubmit={handleSubmitButton}>
        <Input
          id="name"
          name="name"
          placeholder="Nome completo"
          onChange={setBankSlip}
          value={bankSlip.name}
        />
        <Input
          id="cpf"
          name="cpf"
          placeholder="CPF"
          onChange={setBankSlip}
          value={bankSlip.cpf}
        />
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={setBankSlip}
          value={bankSlip.email}
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
