import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <header className="header">
      <nav className="container nav">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {context.data ? (
          <Link className="login" to="/conta">
            {context.data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
