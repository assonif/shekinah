import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";

import { cartStore } from "@/stores/cart";
import { orderStore } from "@/stores/order";

import { Form } from "@unform/web";

import Validator, { addressSchema } from "@/schemas";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import { Container } from "./styles";
import Colors from "@/styles/Colors";
import { useContext, useRef, useState } from "react";
import { observer } from "mobx-react";

interface IInfoAddressProps {
  setCheckoutStep: any;
  setAddress: any;
  setPayer: any;
  address: any;
  payer: any;
}

const InfoAddress = observer(
  ({
    setCheckoutStep,
    setAddress,
    address,
    setPayer,
    payer,
  }: IInfoAddressProps) => {
    const [hasMercadoPagoCTA, setHasMercadoPagoCTA] = useState(false);
    const formRef = useRef(null);

    const cartContext = useContext(cartStore);
    const orderContext = useContext(orderStore);

    const handleSubmitButton = async (e) => {
      e.preventDefault();
      orderContext.setPayerAddress();
      orderContext.consolidateOrder();
      formRef.current.setErrors({});

      try {
        // await Validator(addressSchema, address);

        await handleClickCheckout();
        // setCheckoutStep(1);
      } catch (err) {
        const validationErrors = {};

        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    };

    const handleClickCheckout = async () => {
      try {
        const { data } = await axios.post("/api/mercadopago", {
          data: cartContext.cart,
        });
        console.log(data);
        var script = document.createElement("script");

        // The source domain must be completed according to the site for which you are integrating.
        // For example: for Argentina ".com.ar" or for Brazil ".com.br".
        script.src =
          "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
        script.type = "text/javascript";
        script.dataset.preferenceId = data;
        document.getElementById("button-checkout").innerHTML = "";
        document.querySelector("#button-checkout").appendChild(script);
      } catch (err) {}
    };

    const handleSetAddress = (event) => {
      const { name, value } = event.target;
      setAddress(name, value);
    };

    const handleSetPayer = (event) => {
      const { name, value } = event.target;
      setPayer(name, value);
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
            onChange={handleSetPayer}
            value={payer.name}
          />
          <Input
            id="cpf"
            name="cpf"
            placeholder="CPF"
            onChange={handleSetPayer}
            value={payer.identification.number}
          />
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={handleSetPayer}
            value={payer.email}
          />
          <Input
            id="phone"
            name="phone"
            placeholder="Telefone"
            onChange={handleSetPayer}
            value={payer.phone.number}
          />
          <Input
            id="zip_code"
            name="zip_code"
            placeholder="CEP"
            onChange={handleSetAddress}
            value={address.zip_code}
          />

          <Input
            id="street_name"
            name="street_name"
            placeholder="Endereço"
            onChange={handleSetAddress}
            value={address.street_name}
          />

          <span>
            <Input
              id="street_number"
              name="street_number"
              placeholder="Número"
              width={48}
              onChange={handleSetAddress}
              value={address.street_number}
            />
            <Input
              id="apartment"
              name="apartment"
              placeholder="Complemento"
              width={48}
              onChange={handleSetAddress}
              value={address.apartment}
            />
          </span>

          <Input
            id="bairro"
            name="district"
            placeholder="Bairro"
            onChange={handleSetAddress}
            value={address.district}
          />
          <span>
            <Input
              id="state_name"
              name="state_name"
              placeholder="Estado"
              width={48}
              onChange={handleSetAddress}
              value={address.state_name}
            />
            <Input
              id="city_name"
              name="city_name"
              placeholder="Cidade"
              width={48}
              onChange={handleSetAddress}
              value={address.city_name}
            />
          </span>

          <Dropdown
            name="shipping"
            onChange={handleSetShipping}
            title="Forma de entrega"
            list={[
              { id: 1, title: "dhnoisdhs" },
              { id: 2, title: "ewewewe" },
            ]}
          />

          {!hasMercadoPagoCTA && (
            <Button
              color={Colors.blue_01}
              title="Escolher meio de pagamento"
              textColor={Colors.neutral_color_01}
              bold={false}
              action={handleSubmitButton}
              fontSize={1.2}
            />
          )}

          <div id="button-checkout" />
        </Form>
      </Container>
    );
  }
);

export default InfoAddress;
