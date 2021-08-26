import SummaryItem from "../SummaryItem";
import Button from "../Button";

import { GrLocation, GrDeliver } from "react-icons/gr";
import { RiBankLine } from "react-icons/ri";

import { Container, FloatBox } from "./styles";
import Colors from "@/styles/Colors";

interface ISummaryCheckout {
	setCheckoutStep: any;
	address: any;
	payment: any;
}

export default function SummaryCheckout({
	setCheckoutStep,
	address,
	payment,
}: ISummaryCheckout) {
	const method =
		payment.method === "creditCard" ? "Cartão de Crédito" : "Boleto Bancário";

	return (
		<Container>
			<strong>Confira se está tudo correto</strong>

			<FloatBox>
				<SummaryItem
					icon={<GrLocation />}
					title={`${address.address}, ${address.house_number}`}
					description={`${address.cep}, ${address.district}`}
					action={() => setCheckoutStep(0)}
					shouldHasCTA
				/>
				<SummaryItem
					icon={<GrDeliver />}
					title="SEDEX Entrega em 18 dias"
					description="R$ 12,00"
				/>
			</FloatBox>

			<FloatBox>
				<SummaryItem
					icon={<RiBankLine />}
					title={method}
					description={`3X R$96,00`}
					action={() => setCheckoutStep(1)}
					shouldHasCTA
				/>
			</FloatBox>

			<Button
				color={Colors.blue_01}
				title="Finalizar pedido"
				textColor={Colors.neutral_color_01}
				bold={false}
				action={() => {}}
				fontSize={1.2}
			/>
		</Container>
	);
}
