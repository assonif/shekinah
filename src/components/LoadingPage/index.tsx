import Layout from "../Layout";

import { Container } from "./styles";

export default function LoadingPage() {
  return (
    <Layout noCategories noFooter>
      <Container>
        <div>
          <img
            src="https://media3.giphy.com/media/l3V0onIVjRDCnw7Je/giphy.gif"
            alt=""
          />
        </div>
        <strong>Carregando...</strong>
      </Container>
    </Layout>
  );
}
