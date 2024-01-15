import React from "react";
import style from "../../style/about.module.css";

const Image = ({ photo }) => {
  return (
    <div
      className={style.aboutImage}
      style={{ backgroundImage: `url(${photo})` }}
    ></div>
  );
};

export default Image;
