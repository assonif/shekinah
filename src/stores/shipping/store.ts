import { store } from "../order";
import { observable, makeObservable, action } from "mobx";

export default class ShippingStore {
  methods = [];
  cep = "";
  isLoading = false;

  constructor() {
    makeObservable(this, {
      methods: observable,
      cep: observable,
      isLoading: observable,
      setMethods: action,
      setCep: action,
      setIsLoading: action,
    });
  }

  setMethods(value) {
    this.methods = value;
  }

  setCep(value) {
    this.cep = value;
  }

  setIsLoading() {
    this.isLoading = !this.isLoading;
  }
}
