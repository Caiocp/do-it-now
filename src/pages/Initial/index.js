import React from "react";
import { Link } from "react-router-dom";

import pcLogo from "../../assets/img_responsive.png";
import DINLogo from "../../assets/marca_mini_app.png";

import "./styles.css";

function Initial() {
  return (
    <div className="centerWithBg">
      <div className="content">
        <div className="logo">
          <img src={pcLogo} alt="pc-logo" />
          <img src={DINLogo} alt="do it now logo" />
        </div>
        <div className="buttonContainer">
          <Link to="/login">
            <button className="button loginbtn">Entrar</button>
          </Link>
          <Link to="/register">
            <button className="button registerbtn">Cadastrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Initial;
