import { store } from "../order";
import { observable, makeObservable, action } from "mobx";

export default class ShippingStore {
  methods = [];

  constructor() {
    makeObservable(this, {
      methods: observable,
    });
  }

  setMethods(value) {
    this.methods = value;
  }
}
