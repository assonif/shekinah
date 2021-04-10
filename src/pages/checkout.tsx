import { useEffect, useState } from "react";

import CheckoutSteps from "@/components/CheckoutSteps";
import SEO from "@/components/SEO";
import InfoAddress from "@/components/InfoAddress";

import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, addressState, creditCardState, methodState } from "@/atoms";
import { totalState } from "@/atoms/selectors";

import { Container } from "@/styles/pages/Checkout";
import CardDetails from "@/components/CardDetails";
import PaymentMethod from "@/components/PaymentMethod";
import SummaryCheckout from "@/components/SummaryCheckout";

interface IProduct {
  title: string;
  price: string;
}

export default function checkout() {
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [itemsDetails, setItemDetails] = useState<Array<IProduct>>();

  const cart = useRecoilValue(cartState);
  const method = useRecoilValue(methodState);
  const totals = useRecoilValue(totalState);
  const [address, setAddress] = useRecoilState(addressState);
  const [creditCard, setCreditCard] = useRecoilState(creditCardState);
  const [bankSlip, setBankSlip] = useRecoilState(creditCardState);

  const handleSetAddress = (name, value) => {
    setAddress({ ...address, [name]: value });
  };

  const handleSetCard = (name, value) => {
    setCreditCard({ ...creditCard, [name]: value });
  };

  const handleSetBankSlip = (name, value) => {
    setBankSlip({ ...bankSlip, [name]: value });
  };

  useEffect(() => {
    const filtered: Array<IProduct> = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        filtered.push({ title: item.title, price: item.price });
      }
    });

    setItemDetails(filtered);
  }, []);

  return (
    <>
      <SEO title="Carrinho" />
      <CardDetails total={totals.total} items={itemsDetails} />
      <Container>
        <CheckoutSteps
          checkoutStep={checkoutStep}
          setCheckoutStep={setCheckoutStep}
        />
        {checkoutStep === 0 && (
          <InfoAddress
            setAddress={(name, value) => handleSetAddress(name, value)}
            setCheckoutStep={setCheckoutStep}
            address={address}
          />
        )}
        {checkoutStep === 1 && (
          <PaymentMethod
            setCreditCard={(name, value) => handleSetCard(name, value)}
            creditCard={creditCard}
            setCheckoutStep={setCheckoutStep}
            bankSlip={bankSlip}
            setBankSlip={(name, value) => handleSetBankSlip(name, value)}
          />
        )}
        {checkoutStep === 2 && (
          <SummaryCheckout
            setCheckoutStep={setCheckoutStep}
            address={address}
            payment={{
              method,
              data: method === "creditCard" ? creditCard : bankSlip,
            }}
          />
        )}
      </Container>
    </>
  );
}
