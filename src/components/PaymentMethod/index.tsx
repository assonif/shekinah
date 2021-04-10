import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { methodState } from "@/atoms";
import { FaRegCreditCard, FaBarcode, FaWhatsapp } from "react-icons/fa";

import { Container, SelectStep } from "./styles";
import PaymentCard from "../PaymentCard";
import CreditCardInfo from "../CreditCardInfo";
import BankSlipInfo from "../BankSlipInfo";

interface IPaymentMethodProps {
  setCheckoutStep: any;
  creditCard: any;
  setCreditCard: any;
  bankSlip: any;
  setBankSlip: any;
}

export default function PaymentMethod({
  setCheckoutStep,
  creditCard,
  setCreditCard,
  bankSlip,
  setBankSlip,
}: IPaymentMethodProps) {
  const [method, setMethod] = useRecoilState(methodState);
  const handleSetCreditCard = (event) => {
    const { name, value } = event.target;
    // let newValue = value;
    let newValue;

    if (name === "number") {
      newValue = value.replace(/[^\d\s]/g, "");
      console.log(newValue);
      newValue = newValue.replace(" ", "");
      newValue = newValue.replace(" ", "");
      newValue = newValue.replace(" ", "");

      console.log(newValue);

      if (newValue.length >= 5) {
        newValue = newValue.substring(0, 4) + " " + newValue.substring(4);
      }
      if (newValue.length >= 10) {
        newValue = newValue.substring(0, 9) + " " + newValue.substring(9);
      }
      if (newValue.length >= 15) {
        newValue = newValue.substring(0, 14) + " " + newValue.substring(14);
      }

      if (newValue.length < 20) {
        setCreditCard(name, newValue);
      }
    } else if (name === "cvc") {
      if (value.length <= 3) {
        newValue = value.replace(/[^\d\s-/]/g, "");

        setCreditCard(name, newValue);
      }
    } else if (name === "expiry") {
      newValue = value.replace(/[^\d\s]/g, "");

      if (newValue.length >= 3) {
        newValue = newValue.substring(0, 2) + "/" + newValue.substring(2);
      }

      if (newValue.length <= 5) {
        setCreditCard(name, newValue);
      }
    } else if (name === "name") {
      newValue = value.replace(/[^a-zA-Z ]/, "");
      setCreditCard(name, newValue);
    } else if (name === "cpf") {
      newValue = value.replace(/[^\d\s]/g, "");

      if (newValue.length >= 4) {
        newValue = newValue.substring(0, 3) + "." + newValue.substring(3);
      }
      if (newValue.length >= 8) {
        newValue = newValue.substring(0, 7) + "." + newValue.substring(7);
      }
      if (newValue.length >= 12) {
        newValue = newValue.substring(0, 11) + "-" + newValue.substring(11);
      }

      if (newValue.length <= 14) {
        setCreditCard(name, newValue);
      }
    }
  };

  const handleSetBankSlip = (event) => {
    const { name, value } = event.target;

    let newValue;
    if (name === "cpf") {
      newValue = value.replace(/[^\d\s]/g, "");

      if (newValue.length >= 4) {
        newValue = newValue.substring(0, 3) + "." + newValue.substring(3);
      }
      if (newValue.length >= 8) {
        newValue = newValue.substring(0, 7) + "." + newValue.substring(7);
      }
      if (newValue.length >= 12) {
        newValue = newValue.substring(0, 11) + "-" + newValue.substring(11);
      }

      if (newValue.length <= 14) {
        setBankSlip(name, newValue);
      }
    } else {
      setBankSlip(name, value);
    }
  };

  return (
    <Container>
      {!method && (
        <SelectStep>
          <strong>Como você prefere pagar?</strong>

          <PaymentCard
            onClick={() => {
              setMethod("pix");
            }}
            icon={<FaWhatsapp />}
            title="Direto com vendedor"
            description="5% DESCONTO no Pix"
          />
          <PaymentCard
            onClick={() => {
              setMethod("creditCard");
            }}
            icon={<FaRegCreditCard />}
            title="Cartão de crédito"
          />
          <PaymentCard
            onClick={() => {
              setMethod("bankSlip");
            }}
            icon={<FaBarcode />}
            title="Boleto bancário"
          />
        </SelectStep>
      )}

      {method === "creditCard" && (
        <CreditCardInfo
          setCheckoutStep={setCheckoutStep}
          handleBack={() => setMethod(null)}
          payment={creditCard}
          setPayment={handleSetCreditCard}
        />
      )}

      {method === "bankSlip" && (
        <BankSlipInfo
          setCheckoutStep={setCheckoutStep}
          handleBack={() => setMethod(null)}
          bankSlip={bankSlip}
          setBankSlip={handleSetBankSlip}
        />
      )}
    </Container>
  );
}
