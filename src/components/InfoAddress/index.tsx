import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";

import { Form } from "@unform/web";

import Validator, { addressSchema } from "@/schemas";

import { Container } from "./styles";
import Colors from "@/styles/Colors";
import { useRef } from "react";

interface IInfoAddressProps {
  setCheckoutStep: any;
  setAddress: any;
  address: any;
}

export default function InfoAddress({
  setCheckoutStep,
  setAddress,
  address,
}: IInfoAddressProps) {
  const formRef = useRef(null);

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    formRef.current.setErrors({});

    try {
      await Validator(addressSchema, address);

      setCheckoutStep(1);
    } catch (err) {
      const validationErrors = {};

      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      formRef.current.setErrors(validationErrors);
    }
  };

  const handleSetAddress = (event) => {
    const { name, value } = event.target;
    setAddress(name, value);
  };

  const handleSetShipping = (title, price) => {
    console.log(title, price);
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmitButton}>
        <strong>Para onde enviamos?</strong>
        <Input
          id="nome"
          name="name"
          placeholder="Nome completo"
          value={address.name}
          onChange={handleSetAddress}
        />
        <Input
          id="cpf"
          name="cpf"
          placeholder="CPF"
          onChange={handleSetAddress}
          value={address.cpf}
        />
        <Input
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={handleSetAddress}
          value={address.email}
        />
        <Input
          id="telefone"
          name="phone"
          placeholder="Telefone"
          onChange={handleSetAddress}
          value={address.phone}
        />
        <Input
          id="cep"
          name="cep"
          placeholder="CEP"
          onChange={handleSetAddress}
          value={address.cep}
        />

        <Input
          id="endereco"
          name="address"
          placeholder="Endereço"
          onChange={handleSetAddress}
          value={address.address}
        />

        <span>
          <Input
            id="numero"
            name="house_number"
            placeholder="Número"
            width={48}
            onChange={handleSetAddress}
            value={address.house_number}
          />
          <Input
            id="complemento"
            name="complement"
            placeholder="Complemento"
            width={48}
            onChange={handleSetAddress}
            value={address.complement}
          />
        </span>

        <Input
          id="bairro"
          name="district"
          placeholder="Bairro"
          onChange={handleSetAddress}
          value={address.district}
        />

        <Dropdown
          name="shipping"
          onChange={handleSetShipping}
          title="Forma de entrega"
          list={[
            { id: 1, title: "dhnoisdhs" },
            { id: 2, title: "ewewewe" },
          ]}
        />

        <Button
          color={Colors.blue_01}
          title="Escolher meio de pagamento"
          textColor={Colors.neutral_color_01}
          bold={false}
          action={handleSubmitButton}
          fontSize={1.2}
        />
      </Form>
    </Container>
  );
}
