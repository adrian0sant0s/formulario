import { useForm } from "react-hook-form";
import ImgForm from "./assets/form-img.png";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function data(userData) {
    console.log(userData);
  }

  return (
    <form onSubmit={handleSubmit(data)}>
      <img src={ImgForm} alt="imagem formulário" />
      <div className="ContainerItems">
        <label>
          Nome:
          <input {...register("nome")}></input>
        </label>

        <label>
          Email:
          <input {...register("email")}></input>
        </label>

        <label>
          Senha:
          <input {...register("senha")}></input>
        </label>

        <label>
          Confirmar senha:
          <input {...register("confirmar senha")}></input>
        </label>

        <button type="submit">Cadastrar-se</button>
      </div>
    </form>
  );
}

export default App;
