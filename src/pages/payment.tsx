import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

import { Container } from "@/styles/pages/Payment";
import PaymentSummary from "@/components/PaymentSummary";
import { useContext, useEffect } from "react";
import { cartStore } from "@/stores/cart";

const Payment: React.FC = () => {
  const router = useRouter();

  const cartContext = useContext(cartStore);

  useEffect(() => {
    if (
      router.query.status === "pending" ||
      router.query.status === "in_process" ||
      router.query.status === "approved"
    ) {
      cartContext.setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [router.query.status]);

  return (
    <Layout shouldCancelLocalStorage>
      <SEO title="Meu pedido" />
      <Container>
        {(router.query.status === "pending" ||
          router.query.status === "in_process") && (
          <PaymentSummary
            button="Acompanhar meu pedido"
            route="/orders"
            message={
              <span>
                Assim que o pagamento for aprovado, o pedido:{" "}
                <b>{router.query.payment_id}</b> será enviado até você!
              </span>
            }
            title="Você está quase lá!"
            image="/pending.svg"
          />
        )}
        {router.query.status === "approved" && (
          <PaymentSummary
            button="Acompanhar meu pedido"
            route="/orders"
            message={
              <span>
                Seu pedido: <b>{router.query.payment_id}</b> está sendo
                preparado para o envio!
              </span>
            }
            title="Seu pagamento foi aprovado"
            image="/checked.svg"
          />
        )}
      </Container>
    </Layout>
  );
};

export default Payment;
