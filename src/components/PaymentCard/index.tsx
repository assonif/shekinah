import { FiChevronRight } from "react-icons/fi";

import { Container } from "./styles";

interface IPaymentCards {
  icon: any;
  title: string;
  description?: string;
  onClick: any;
}

export default function PaymentCard({
  icon,
  title,
  description,
  onClick,
}: IPaymentCards) {
  return (
    <Container onClick={onClick}>
      <span>{icon}</span>
      <div>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>

      <FiChevronRight />
    </Container>
  );
}
