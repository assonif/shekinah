import { db } from "@/config/firebase";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Container } from "./styles";

interface CarrousselProps {
  title: string;
  category: string;
}

export default function Carroussel({ title, category }: CarrousselProps) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = async () => {
    let data = [];
    let error = {};

    await db
      .collection("Products")
      .where("category_id", "==", category)
      .limit(4)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
      })
      .catch((e) => (error = e));

    return data;
  };

  useEffect(() => {
    getRelatedProducts().then((res) => setRelatedProducts(res));
  }, []);

  return (
    <Container>
      <span>{title}</span>
      <div>
        {relatedProducts.map((product, index) => {
          if (index > 3) return;
          return (
            <ProductCard
              key={product.id}
              cover_photo={product.cover_photo}
              price={product.price}
              photos={product.photos}
              slug={product.slug}
              sale_price={product.sale_price}
              title={product.title}
            />
          );
        })}
      </div>
    </Container>
  );
}
