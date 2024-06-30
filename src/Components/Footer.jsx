import React from "react";
import "./Footer.scss";
import Dogs from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className="footer">
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
