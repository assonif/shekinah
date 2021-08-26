import { Container } from "./styles";

interface ISummaryItem {
	icon: any;
	title: string;
	description?: string;
	shouldHasCTA?: boolean;
	action?: any;
}

export default function SummaryItem({
	icon,
	title,
	description,
	shouldHasCTA,
	action,
}: ISummaryItem) {
	return (
		<Container shouldHasCTA={shouldHasCTA}>
			<div>
				<span>{icon}</span>
				<div>
					<h5>{title}</h5>
					{description && <p>{description}</p>}
				</div>
			</div>

			<button type="button" onClick={action}>
				Alterar
			</button>
		</Container>
	);
}
