import { calcularPrecoPrazo } from "correios-brasil";

export default async (req, res) => {
  const { sCepDestino } = req.body;

  let args = {
    sCepOrigem: "13960000",
    nVlPeso: "0,1",
    nCdFormato: "1",
    nVlComprimento: "20",
    nVlAltura: "20",
    nVlLargura: "20",
    nCdServico: ["04014", "04510"], //Array com os códigos de serviço
    nVlDiametro: "0",
  };
  const response = await calcularPrecoPrazo({ ...args, sCepDestino });

  return res.json(response);
};
