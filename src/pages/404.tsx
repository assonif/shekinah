import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Colors from "@/styles/Colors";

import { Container } from "@/styles/pages/404";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout noCategories noFooter>
      <Container>
        <div>
          <img
            src="https://i.ibb.co/1dYgRkC/depositphotos-279985590-stock-illustration-vintage-broken-skateboard-template-isolated-removebg-prev.png"
            alt=""
          />
        </div>
        <strong>Ops! Essa página não existe.</strong>
        <Link href={"/"}>
          <a>
            <Button
              title="Voltar para a página inicial"
              action={() => {}}
              color={Colors.neutral_color_09}
              textColor={Colors.neutral_color_01}
            />
          </a>
        </Link>
      </Container>
    </Layout>
  );
}
