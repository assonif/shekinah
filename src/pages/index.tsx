// import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

import Link from "next/link";

import { Document } from "prismic-javascript/types/documents";
import Layout from "@/components/Layout";
import HomeLayout from "@/components/HomeLayout";
import PromotionCard from "@/components/PromotionCard";
import VerticalCard from "@/components/VerticalCard";

import { useEffect } from "react";

interface HomeProps {
  recommendedProducts: Document[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <Layout title="NOVIDADES">
      <SEO
        title="Shekinah, sua loja de skate online!"
        shouldExcludeTitleSuffix
      />

      <HomeLayout>
        <PromotionCard />
        <PromotionCard />
        <VerticalCard />
        <VerticalCard />
      </HomeLayout>
    </Layout>
  );
}

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const recommendedProducts = await client().query([
//     Prismic.Predicates.at("document.type", "product"),
//   ]);

//   return {
//     props: {
//       recommendedProducts: recommendedProducts.results,
//     },
//   };
// };
