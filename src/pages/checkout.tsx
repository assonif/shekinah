import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import CheckoutSteps from "@/components/CheckoutSteps";
import SEO from "@/components/SEO";
import InfoAddress from "@/components/InfoAddress";

import { orderStore } from "@/stores/order";
import { cartStore } from "@/stores/cart";

import { Container } from "@/styles/pages/Checkout";
import CardDetails from "@/components/CardDetails";
import PaymentMethod from "@/components/PaymentMethod";
import SummaryCheckout from "@/components/SummaryCheckout";
import { observer } from "mobx-react";

interface IProduct {
	title: string;
	price: string;
}

const checkout = observer(() => {
	const [checkoutStep, setCheckoutStep] = useState(0);
	const [itemsDetails, setItemDetails] = useState<Array<IProduct>>();

	const orderContext = useContext(orderStore);
	const cartContext = useContext(cartStore);

	const handleSetAddress = (name, value) => {
		orderContext.setAddress({
			...orderContext.receiver_address,
			[name]: value,
		});
	};

	const handleSetPayer = (name, value) => {
		if (name === "cpf") {
			orderContext.setPayerCPF(value);
		} else if (name === "phone") {
			orderContext.setPayerPhone(value);
		} else {
			orderContext.setPayer({
				...orderContext.payer,
				[name]: value,
			});
		}
	};

	// const handleSetCard = (name, value) => {
	//   setCreditCard({ ...creditCard, [name]: value });
	// };

	// const handleSetBankSlip = (name, value) => {
	//   setBankSlip({ ...bankSlip, [name]: value });
	// };

	useEffect(() => {
		const filtered: Array<IProduct> = [];

		cartContext.cart.forEach((item) => {
			for (let i = 0; i < item.quantity; i++) {
				filtered.push({ title: item.title, price: item.price });
			}
		});

		setItemDetails(filtered);
	}, [cartContext.cart]);

	useEffect(() => {
		if (cartContext.cart.length === 0) {
			var storedArray = localStorage.getItem("cart");
			cartContext.setCart(JSON.parse(storedArray));
		}
	}, []);

	return (
		<>
			<SEO title="Carrinho" />
			<CardDetails total={orderContext.subtotal} items={itemsDetails} />
			<Container>
				{checkoutStep === 0 && (
					<InfoAddress
						setAddress={(name, value) => handleSetAddress(name, value)}
						setPayer={(name, value) => handleSetPayer(name, value)}
						setCheckoutStep={setCheckoutStep}
						address={orderContext.receiver_address}
						payer={orderContext.payer}
					/>
				)}
				{/* {checkoutStep === 1 && (
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
        )} */}
			</Container>
		</>
	);
});

export default checkout;
