import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SubTotal from "@/components/SubTotal";
import Shipping from "@/components/Shipping";

import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/atoms";
import { totalState } from "@/atoms/selectors";

import { Container } from "@/styles/pages/Cart";

export default function Cart() {
  const [cart, setCart] = useRecoilState(cartState);
  const totals = useRecoilValue(totalState);

  const updateAction = (id, value) => {
    const copy = [...cart];
    let index;
    let copyItem;

    copy.forEach((item, i) => {
      if (item.id === id) {
        index = i;
        copyItem = item;
      }
    });

    if (value <= 0) {
      copyItem = { ...copyItem, quantity: 1 };
      setCart(copy);
      return;
    } else {
      let newQuantity = value;

      if (value > copyItem) {
        newQuantity = copyItem;
      }

      copyItem = { ...copyItem, quantity: newQuantity };
    }

    copy.splice(index, 1);

    copy.splice(index, 0, copyItem);

    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  const removeAction = (id) => {
    const copy = [...cart];
    let index;
    copy.forEach((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });

    copy.splice(index, 1);

    setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  return (
    <Layout title="Carrinho">
      <SEO title="Carrinho" />
      <Container>
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              size={item.size}
              cover_photo={item.cover_photo}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              maxQuantity={item.maxQuantity}
              removeAction={() => removeAction(item.id)}
              updateAction={(id, value) => updateAction(id, value)}
            />
          ))}
        </ul>

        <div>
          <SubTotal value={totals.subtotal} />
          <Shipping />
        </div>
      </Container>
    </Layout>
  );
}
