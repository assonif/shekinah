import Link from "next/link";

import { db } from "@/config/firebase";

import { BarContainer, ItemContainer } from "./styles";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface CategoryProps {
  categories: Array<{ id: string; title: string }>;
}

const CategoryItem = ({ name, link }) => {
  return (
    <ItemContainer>
      <Link href={link || "/"}>
        <a>
          <span>{name}</span>
        </a>
      </Link>
    </ItemContainer>
  );
};

export default function CategoriesBar() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let data = [];
    let error = {};

    await db
      .collection("Categories")
      .orderBy("id", "asc")
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
    getCategories().then((res) => setCategories(res));
  }, []);
  return (
    <BarContainer>
      <ul>
        {categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              name={category.title}
              link={`/catalog/categories/${category.id}`}
            />
          );
        })}
      </ul>
    </BarContainer>
  );
}
