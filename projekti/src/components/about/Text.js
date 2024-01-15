import React from "react";
import style from "../../style/about.module.css";

const Text = ({ paragraph }) => {
  return <p className={style.paragraph}>{paragraph}</p>;
};

export default Text;
