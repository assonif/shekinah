import Link from "next/link";
import Colors from "@/styles/Colors";
import Button from "../Button";

import { FiTrash2 } from "react-icons/fi";

import {
  Container,
  ProductContainer,
  QuantityContainer,
  InfoContainer,
} from "./styles";
import { useEffect, useState } from "react";

interface ICartItemProps {
  id: number;
  slug: string;
  title: string;
  quantity: number;
  price: string;
  cover_photo: string;
  size: string;
  removeAction: any;
  updateAction: any;
  maxQuantity: number;
}

export default function CartItem({
  id,
  cover_photo,
  price,
  quantity,
  title,
  size,
  removeAction,
  updateAction,
  maxQuantity,
  slug,
}: ICartItemProps) {
  const [quantityInput, setQuantityInput] = useState(0);

  useEffect(() => {
    setQuantityInput(quantity);
  }, [quantity]);

  const handleChangeInput = (event) => {
    const { value } = event.target;

    setQuantityInput(value > maxQuantity ? maxQuantity : value);
  };

  return (
    <Container>
      <img src={cover_photo} alt="" />
      <InfoContainer>
        <ProductContainer>
          <Link href={`/catalog/products/${slug}`}>
            <a>
              <strong>{title}</strong>
            </a>
          </Link>
          <span>Tamanho: {size}</span>
          <span>Vendido e enviado por Shekinah Skate Shop</span>
          <b>R$ {price}</b>
        </ProductContainer>
        <QuantityContainer>
          <div>
            <span>Quantidade:</span>
            <input
              type="number"
              min="1"
              value={quantityInput}
              onChange={handleChangeInput}
              onBlur={() => {
                if (quantityInput <= 0) {
                  setQuantityInput(1);
                }
                if (quantityInput !== quantity && quantityInput > 0) {
                  updateAction(id, quantityInput);
                }
              }}
            />
          </div>

          <div className="button-container">
            <Button
              title="ATUALIZAR"
              color={Colors.neutral_color_05}
              textColor={Colors.neutral_color_01}
              action={() => {
                if (quantityInput !== quantity && quantityInput > 0) {
                  updateAction(id, quantityInput);
                }
              }}
              width={30}
              height={2}
              bold
            />
            <Button
              title="REMOVER"
              color={Colors.neutral_color_01}
              action={removeAction}
              bold={false}
              height={2}
              width={40}
            >
              <FiTrash2 />
            </Button>
          </div>
        </QuantityContainer>
      </InfoContainer>
    </Container>
  );
}
