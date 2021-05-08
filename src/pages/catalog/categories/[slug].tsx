import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";

import { Container } from "@/styles/pages/Categories";
import { db } from "@/config/firebase";
import LoadingPage from "@/components/LoadingPage";

interface IProduct {
  id: number;
  title: string;
  cover_photo: string;
  photos: string[];
  brand: string;
  price: string;
  sale_price: string;
  sizes: string[];
  category_id: string;
  slug: string;
  quantity: number;
  description: string;
}

interface CategoryProps {
  category: { id: string; title: string };
  products: IProduct[];
}

const Categories = ({ products, category }: CategoryProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingPage />;
  }

  return (
    <Layout title={category.title.toUpperCase()}>
      <SEO title={category.title} />
      <Container>
        {products.map((product) => {
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
        {products.map((product) => {
          if (product.quantity === 0) {
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
          }
        })}
      </Container>
    </Layout>
  );
};

export default Categories;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CategoryProps> = async (
  context
) => {
  const { slug } = context.params;

  let data = [];
  let categories = [];
  let error = {};

  console.log("1");

  await db
    .collection("Products")
    .where("category_id", "==", slug)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    })
    .catch((e) => (error = e));

  const products = data;
  console.log(products);

  await db
    .collection("Categories")
    .where("id", "==", slug)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
      });
    })
    .catch((e) => (error = e));

  const category = categories;

  console.log(category);

  return {
    props: {
      category: category[0],
      products,
    },
    revalidate: 60,
  };
};
