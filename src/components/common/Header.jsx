import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/cinema.png"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
        <h1>FunPedia</h1>
      </Link>

      <div className="header-sub">
            <p> El cine nunca estuvo tan cerca </p>
        </div>
    </div>
  );
};

export default Header;
