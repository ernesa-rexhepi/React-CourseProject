import React from "react";
import style from "../style/card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, title, price, link }) => {
  return (
    <div className={style.card}>
      <div
        className={style.cardImg}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{title}</h1>
      {price ? <h3>${price}</h3> : <></>}
      <Link to={link}>View</Link>
    </div>
  );
};

export default Card;
