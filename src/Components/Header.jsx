import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
