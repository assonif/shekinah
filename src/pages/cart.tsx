import { useContext, useEffect } from "react";

import CartItem from "@/components/CartItem";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SubTotal from "@/components/SubTotal";
import Shipping from "@/components/Shipping";

import axios from "axios";

import { observer } from "mobx-react";

import { cartStore } from "@/stores/cart";
import { orderStore } from "@/stores/order";

import { Container } from "@/styles/pages/Cart";
const Cart = observer(() => {
  const cartContext = useContext(cartStore);
  const orderContext = useContext(orderStore);

  useEffect(() => {}, []);

  const updateAction = (id, value) => {
    const copy = [...cartContext.cart];
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
      cartContext.setCart(copy);
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

    cartContext.setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  const removeAction = (id, size) => {
    const copy = [...cartContext.cart];
    let index;
    copy.forEach((item, i) => {
      if (item.id === id && item.size === size) {
        index = i;
      }
    });

    copy.splice(index, 1);

    cartContext.setCart(copy);
    localStorage.setItem("cart", JSON.stringify(copy));
  };

  return (
    <Layout title="Carrinho">
      <SEO title="Carrinho" />
      <Container>
        <ul>
          {cartContext.cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              size={item.size}
              cover_photo={item.cover_photo}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              maxQuantity={item.maxQuantity}
              removeAction={() => removeAction(item.id, item.size)}
              updateAction={(id, value) => updateAction(id, value)}
              slug={item.slug}
            />
          ))}
        </ul>

        <div>
          <SubTotal value={orderContext.subtotal} />
          <Shipping />
        </div>
      </Container>
    </Layout>
  );
});

export default Cart;
