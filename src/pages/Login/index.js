import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

import DINLogo from "../../assets/marca_mini_app.png";
import schema from "../../utils/LoginValidatorSchema";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await schema.validate({ name, password });

      localStorage.setItem("username", name);

      history.push("/dashboard");
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="centerWithBg">
      <img
        src={DINLogo}
        alt="do it now logo"
        style={{ width: 271, height: 47 }}
      />
      <div className="loginCard">
        <Link to="/" className="backLink">
          <IoIosArrowBack size={24} color="#333" />
          Voltar
        </Link>
        <div className="formCard">
          <div className="loginText">Entrar</div>
          <form onSubmit={handleLogin}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Seu nome"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
            />
            <div className="btnContainer">
              <button className="button loginBtn" type="submit">
                Entrar
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
