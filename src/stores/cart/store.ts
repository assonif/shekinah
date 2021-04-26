import { store } from "../order";
import { observable, makeObservable, action } from "mobx";

export default class CartStore {
  cart = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      setCart: action,
    });
  }

  setCart(value) {
    this.cart = value ? value : [];

    store.setSubTotal(this.cart);
  }
}
