import { calcularPrecoPrazo } from "correios-brasil";

export default async (req, res) => {
  let args = {
    sCepOrigem: "13960000",
    sCepDestino: "13960000",
    nVlPeso: "0,1",
    nCdFormato: "3",
    nVlComprimento: "2",
    nVlAltura: "0",
    nVlLargura: "2",
    nCdServico: ["04014", "04510"], //Array com os códigos de serviço
    nVlDiametro: "0",
  };
  const tt = await calcularPrecoPrazo(args);

  return res.json(tt);

  return res.json(tt);
};
