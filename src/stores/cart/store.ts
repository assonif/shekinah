import { store } from "../order";
import { observable, makeObservable, action } from "mobx";

export default class CartStore {
  cart = [];
  isLoading = false;
  hasGatewayButton = false;

  constructor() {
    makeObservable(this, {
      cart: observable,
      isLoading: observable,
      hasGatewayButton: observable,
      setHasGatewayButton: action,
      setIsLoading: action,
      setCart: action,
    });
  }

  setHasGatewayButton(value) {
    this.hasGatewayButton = value;
  }

  setIsLoading() {
    this.isLoading = !this.isLoading;
  }

  setCart(value) {
    this.cart = value ? value : [];

    store.setSubTotal(this.cart);
  }
}
