import { useEffect, useState } from "react";
import { FiChevronsDown } from "react-icons/fi";

import {
  Container,
  Footer,
  Summary,
  CartItem,
  Shipping,
  Overlay,
} from "./styles";

interface IProduct {
  title: string;
  price: string;
}

interface ICardDetailsProps {
  items: Array<IProduct>;
  total: number;
}

export default function CardDetails({ total, items }: ICardDetailsProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    var summaryHeight = document.getElementById("summary").clientHeight;
    var shippingHeight = document.getElementById("shipping").clientHeight;

    setHeight(summaryHeight + shippingHeight);
  }, [isOpened]);

  return (
    <>
      <Container relativeHeight={height} isOpened={isOpened}>
        <span>
          <img src="https://i.ibb.co/b6dD5f1/logo.png" alt="Logo shekinah" />
        </span>
        <Summary id="summary" isOpened={isOpened}>
          <strong>Detalhes da sua compra</strong>
          {items &&
            items.map((item, index) => (
              <CartItem key={index}>
                <span>{item.title}</span>
                <span>R$ {item.price}</span>
              </CartItem>
            ))}
        </Summary>
        <Shipping id="shipping" isOpened={isOpened}>
          <span>Valor do frete</span>
          <span>R$ 0,00</span>
        </Shipping>
        <Footer isOpened={isOpened}>
          <div>
            <span>A pagar</span>
            <span>R$ {total}</span>
          </div>
          <button onClick={() => setIsOpened(!isOpened)} type="button">
            <FiChevronsDown />
          </button>
        </Footer>
      </Container>
      <Overlay isOpened={isOpened} />
    </>
  );
}
