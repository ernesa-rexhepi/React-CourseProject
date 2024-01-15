import React from "react";
import style from "../style/footer.module.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={logo} alt="logo" />
      <a href="tel:044123123">+38344123123</a>
      <h3>2023 All Rights Reserved</h3>
    </div>
  );
};

export default Footer;
