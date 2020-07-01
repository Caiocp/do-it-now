import * as yup from "yup";

let schema = yup.object().shape({
  title: yup
    .string()
    .required("O campo é obrigatório")
    .min(0, "O campo deve ter no mínimo 1 caracteres"),
});

export default schema;
