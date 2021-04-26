import { observable, makeObservable, action, toJS } from "mobx";

export default class OrderStore {
  subtotal = 0;
  shipments = {
    cost: 0,
    mode: "",
  };
  receiver_address = {
    zip_code: "",
    street_name: "",
    street_number: "",
    floor: "",
    apartment: "",
    city_name: "",
    state_name: "",
    country_name: "BRASIL",
  };
  payer = {
    name: "",
    email: "",
    phone: { area_code: "", number: "" },
    identification: { type: "CPF", number: "" },
    address: { street_name: "", street_number: "", zip_code: "" },
  };
  finalOrder = {};

  constructor() {
    makeObservable(this, {
      subtotal: observable,
      receiver_address: observable,
      payer: observable,
      setAddress: action,
      setSubTotal: action,
      setPayer: action,
      setPayerCPF: action,
      setPayerPhone: action,
      setPayerAddress: action,
      consolidateOrder: action,
    });
  }

  setSubTotal(value) {
    let subtotalAux = 0;
    value.forEach((item) => {
      subtotalAux += parseFloat(item.price) * item.quantity;
    });
    this.subtotal = subtotalAux;
  }

  setAddress(value) {
    this.receiver_address = value;

    console.log(this.receiver_address);
  }

  setPayer(value) {
    this.payer = value;
  }

  setPayerPhone(value) {
    this.payer.phone.number = value;
  }

  setPayerCPF(value) {
    this.payer.identification.number = value;
  }

  setPayerAddress() {
    this.payer.address = {
      street_name: this.receiver_address.street_name,
      street_number: this.receiver_address.street_number,
      zip_code: this.receiver_address.zip_code,
    };
  }

  consolidateOrder() {
    this.finalOrder = {
      payer: toJS(this.payer),
      shipments: {
        cost: this.shipments.cost,
        mode: this.shipments.mode,
        receiver_address: toJS(this.receiver_address),
      },
    };

    console.log(this.finalOrder);
  }
}
