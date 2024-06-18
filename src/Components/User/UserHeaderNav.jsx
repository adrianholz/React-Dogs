import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import AdicionarFoto from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import "./UserHeaderNav.scss";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const mobile = useMedia("40rem");

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`mobileButton ${mobileMenu && "mobileButtonActive"}`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}

      <nav
        className={`${mobile ? "userNavMobile" : "userNav"} ${
          mobileMenu && "userNavMobileActive"
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
