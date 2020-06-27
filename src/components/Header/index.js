import React from "react";
import { Link } from "react-router-dom";

import DINLogo from "../../assets/marca_mini_app2.png";
import Avatar from "../../assets/avatar.png";

import "./styles.css";

function Header({ user = "user" }) {
  return (
    <div className="headerContainer">
      <Link to="/">
        <img
          src={DINLogo}
          alt="do it now logo"
          style={{ width: 200, height: 35 }}
        />
      </Link>
      <div className="userInfo">
        <img src={Avatar} alt="user avatar" style={{ width: 45, height: 45 }} />
        {user}
      </div>
    </div>
  );
}

export default Header;
