import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import DINLogo from "../../assets/marca_mini_app.png";

import "./styles.css";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleRegister(e) {
    e.preventDefault();

    history.push("/dashboard");
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
          <form onSubmit={handleRegister}>
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
        </div>
      </div>
    </div>
  );
}

export default Login;
