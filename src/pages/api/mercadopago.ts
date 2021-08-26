import mercado from "mercadopago";

mercado.configure({
	access_token:
		"TEST-7760395140045230-041220-dc96540514d4bdcce5834c1dd639f9dd-723959770",
});

// Cria um objeto de preferência
export default async (req, res) => {
	let preference = {
		items: [],
		back_urls: {
			success: "https://shekinahstore.vercel.app/payment",
			failure: "https://shekinahstore.vercel.app/",
			pending: "https://shekinahstore.vercel.app/payment",
		},
		auto_return: "approved",
		payer: {
			name: "Joao",
			surname: "Silva",
			email: "user@email.com",
			date_created: "2015-06-02T12:58:41.425-04:00",
			phone: {
				area_code: "11",
				number: 44444444,
			},

			identification: {
				type: "CPF",
				number: "19119119100",
			},

			address: {
				street_name: "Street",
				street_number: 123,
				zip_code: "06233200",
			},
		},

		shipments: {
			cost: 224,
			mode: "not_specified",
			receiver_address: {
				zip_code: "2323",
				street_name: "3DSWDSDSDS45",
				street_number: 443,
				floor: "SDS",
				apartment: "34F",
				city_name: "SOCORRO",
				state_name: "SÃO PAULO",
				country_name: "BRASIL",
			},
		},
	};
	const { data } = req.body;

	data.forEach((item) => {
		preference.items.push({
			title: item.title,
			unit_price: parseFloat(item.price),
			quantity: parseInt(item.quantity),
		});
	});

	console.log(preference);

	const { body } = await mercado.preferences.create(preference);

	console.log(body);

	return res.json(body.id);
};
