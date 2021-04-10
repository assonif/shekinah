import * as Yup from "yup";

function isValidCPF(cpf) {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/gim, "");
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false;
  }
  var soma = 0;
  var resto;
  for (var i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (var i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

const Validator = async (schema, data) => {
  try {
    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      throw err;
    }
  }
};

export default Validator;

Yup.addMethod(Yup.string, "isValidCPF", function (value) {
  return this.test("isValidCPF", value, (e) => isValidCPF(e));
});

export const addressSchema = Yup.object().shape({
  address: Yup.string().required("Endereço obrigatório."),
  cep: Yup.string().required("CEP obrigatório."),
  complement: Yup.string(),
  name: Yup.string().required("Nome obrigatório."),
  cpf: Yup.string()
    .isValidCPF("Insira um CPF válido.")
    .required("CPF obrigatório."),
  email: Yup.string()
    .email("O formato deve estar correto.")
    .required("E-mail obrigatório."),
  district: Yup.string().required("Bairro obrigatório."),
  house_number: Yup.string().required("Número obrigatório."),
  phone: Yup.string().required("Telefone obrigatório."),
});

export const creditCardSchema = Yup.object().shape({
  number: Yup.string().length(19).required("Endereço obrigatório."),
  name: Yup.string().required("Endereço obrigatório."),
  cvc: Yup.string().length(3).required("Endereço obrigatório."),
  expiry: Yup.string().length(5).required("Endereço obrigatório."),
  cpf: Yup.string()
    .isValidCPF("Insira um CPF válido.")
    .required("CPF obrigatório."),
  method: Yup.string(),
  parcel: Yup.string(),
});

export const bankSlipSchema = Yup.object().shape({
  name: Yup.string().required("Endereço obrigatório."),
  cpf: Yup.string()
    .isValidCPF("Insira um CPF válido.")
    .required("CPF obrigatório."),
  email: Yup.string()
    .email("O formato deve estar correto.")
    .required("E-mail obrigatório."),
  method: Yup.string(),
});
