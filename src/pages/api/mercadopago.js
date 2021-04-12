import mercado from "mercadopago";

mercado.configure({
  access_token:
    "TEST-7760395140045230-041220-dc96540514d4bdcce5834c1dd639f9dd-723959770",
});

// Cria um objeto de preferência
export default () => {
  let preference = {
    items: [
      {
        title: "Meu produto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercado.preferences
    .create(preference)
    .then(function (response) {
      console.log("mercado pago", response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
