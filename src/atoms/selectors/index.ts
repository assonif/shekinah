import { selector } from "recoil";
import { cartState, shippingState } from "..";

export const totalState = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    const shipping = get(shippingState);

    let subtotal = 0;
    cart.forEach((item) => {
      subtotal = subtotal + parseFloat(item.price) * item.quantity;
    });

    return {
      subtotal,
      total: (subtotal + shipping).toFixed(2),
    };
  },
});
