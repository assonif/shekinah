import { useEffect, useState } from "react";

import Link from "next/link";
import { Container, InfoContainer, PriceContainer, SaleInfo } from "./styles";

interface IProduct {
  title: string;
  cover_photo: string;
  photos: string[];
  price: string;
  sale_price: string;
  slug: string;
  unavailable?: boolean;
  isRelatedProducts?: boolean;
}

export default function ProductCard({
  cover_photo,
  photos,
  price,
  sale_price,
  slug,
  title,
  unavailable,
  isRelatedProducts = false,
}: IProduct) {
  const [photo, setPhoto] = useState("");
  const [discount, setdiscount] = useState("");

  useEffect(() => {
    setPhoto(cover_photo);

    console.log(cover_photo);

    if (sale_price) {
      setdiscount(
        (100 - (parseFloat(sale_price) * 100) / parseFloat(price)).toFixed(0)
      );
    }
  }, []);

  return (
    <Container
      onMouseOut={() => {
        setPhoto(cover_photo);
      }}
      onMouseOver={() => photos[0] && setPhoto(photos[0])}
      unavailable={unavailable}
    >
      <Link href={`/catalog/products/${slug}`}>
        <a>
          {discount && !unavailable && (
            <SaleInfo isRelatedProducts={isRelatedProducts}>
              {discount}%
            </SaleInfo>
          )}
          <div>
            <img src={photo} alt={slug} />
          </div>

          <InfoContainer>
            <span>{title}</span>
            {unavailable ? (
              <strong>PRODUTO INDISPONÍVEL</strong>
            ) : (
              <PriceContainer salePrice={sale_price && true}>
                <strong>R$ {price}</strong>
                {sale_price && <span>R$ {sale_price}</span>}
              </PriceContainer>
            )}
          </InfoContainer>
        </a>
      </Link>
    </Container>
  );
}
