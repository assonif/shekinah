import { atom } from "recoil";

export const cartState = atom({ key: "cartAtom", default: [] });

export const shippingState = atom({ key: "shippingAtom", default: 0 });

export const addressState = atom({ key: "addressAtom", default: {} });

export const creditCardState = atom({
  key: "creditCardAtom",
  default: { cvc: "", expiry: "", name: "", number: "" },
});

export const bankSlipState = atom({
  key: "bankSlipAtom",
  default: { name: "", email: "", cpf: "" },
});

export const methodState = atom({
  key: "methodAtom",
  default: null,
});
