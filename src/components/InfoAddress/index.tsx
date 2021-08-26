import Link from "next/link";

import Input from "../Input";
import Button from "../Button";
import Dropdown from "../Dropdown";

import { cartStore } from "@/stores/cart";
import { orderStore } from "@/stores/order";

import { Form } from "@unform/web";

import { FcLock } from "react-icons/fc";

import Validator, { addressSchema } from "@/schemas";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

import { Container, Security } from "./styles";
import Colors from "@/styles/Colors";
import { useContext, useRef, useState } from "react";
import { observer } from "mobx-react";
import CircularLoader from "../CircularLoader";

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
    const formRef = useRef(null);

    const cartContext = useContext(cartStore);
    const orderContext = useContext(orderStore);

    const handleSubmitButton = async (e) => {
      orderContext.setPayerAddress();
      orderContext.consolidateOrder();
      formRef.current.setErrors({});

      try {
        cartContext.setHasGatewayButton(false);
        cartContext.setIsLoading();

        await handleClickCheckout();

        cartContext.setIsLoading();
        cartContext.setHasGatewayButton(true);
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
      cartContext.setHasGatewayButton(false);
      setAddress(name, value);
    };

    const handleSetPayer = (event) => {
      const { name, value } = event.target;
      cartContext.setHasGatewayButton(false);
      setPayer(name, value);
    };

    const handleSetShipping = (title, price) => {
      console.log(title, price);
    };

    return (
      <Container hasGatewayButton={cartContext.hasGatewayButton}>
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

          {!cartContext.isLoading && !cartContext.hasGatewayButton && (
            <Button
              color={Colors.blue_01}
              title="Escolher meio de pagamento"
              textColor={Colors.neutral_color_01}
              bold={false}
              action={handleSubmitButton}
              fontSize={1.2}
            />
          )}

          {cartContext.isLoading && !cartContext.hasGatewayButton && (
            <CircularLoader />
          )}

          <div id="button-checkout" />
          {cartContext.hasGatewayButton && (
            <Security>
              <strong>
                <FcLock />
                <b>PARA A SUA SEGURANÇA</b>.
              </strong>
              <strong>
                Você será redirecionado ao <b>MercadoPago</b>
              </strong>
            </Security>
          )}

          <Link href="/cart">
            <a>
              <img src="/left-arrow.svg" alt="Voltar ao carrinho" /> Voltar ao
              carrinho
            </a>
          </Link>
        </Form>
      </Container>
    );
  }
);

export default InfoAddress;
