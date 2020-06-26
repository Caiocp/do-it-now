import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Camera from "../../assets/camera.png";
import DINLogo from "../../assets/marca_mini_app.png";

import "./styles.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleRegister(e) {
    e.preventDefault();

    history.push("/");
  }

  return (
    <div className="centerWithBg">
      <img
        src={DINLogo}
        alt="do it now logo"
        style={{ width: 271, height: 47 }}
      />
      <div className="registerCard">
        <Link to="/" className="backLink">
          <IoIosArrowBack size={24} color="#333" />
          Voltar
        </Link>
        <div className="formCard">
          <div className="loginHeader">
            <img style={{ marginBottom: 10 }} src={Camera} alt="pc-logo" />
            Criar Conta
          </div>
          <form onSubmit={handleRegister}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Seu nome"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
            />
            <div className="btnContainer">
              <button className="button registerBtn" type="submit">
                Criar conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
