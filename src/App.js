import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ImgForm from "./assets/form-img.png";
import "./App.css";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(6, "mínimo 6 caracteres")
      .required("Digite uma senha"),
    confirmPassword: yup
      .string()
      .required("Digite uma senha")
      .oneOf([yup.ref("password")], "As senhas não conferem"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function data(userData) {}

  return (
    <form onSubmit={handleSubmit(data)}>
      <img src={ImgForm} alt="imagem formulário" />
      <div className="ContainerItems">
        <label>
          Nome:
          <input type="text" {...register("name")}></input>
          <span>{errors.name?.message}</span>
        </label>

        <label>
          Email:
          <input type="text" {...register("email")}></input>
          <span>{errors.email?.message}</span>
        </label>

        <label>
          Senha:
          <input type="password" {...register("password")}></input>
          <span>{errors.password?.message}</span>
        </label>

        <label>
          Confirmar senha:
          <input type="password" {...register("confirmPassword")}></input>
          <span>{errors.confirmPassword?.message}</span>
        </label>

        <button type="submit">Cadastrar-se</button>
      </div>
    </form>
  );
}

export default App;
