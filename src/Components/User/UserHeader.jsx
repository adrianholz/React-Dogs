import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import "./UserHeader.scss";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("Minha Conta");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const title = document.querySelector(".userHeader .title");

    switch (pathname) {
      case "/conta/postar":
        setTitle("Postar Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className="userHeader">
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
