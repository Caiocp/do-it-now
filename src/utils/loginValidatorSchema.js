import * as yup from "yup";

let schema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(5, "A senha deve ter no mínimo 5 caracteres"),
});

export default schema;
