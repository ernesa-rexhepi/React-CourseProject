import React from "react";
import style from "../../style/homepage.module.css";
import Card from "../Card";

const Section = ({ title, array }) => {
  return (
    <div className={style.section}>
      {title ? <h1>{title}</h1> : <></>}
      <div className={style.cardWrapper}>
        {array ? (
          array.map((a, i) => {
            return (
              <Card
                image={a.image}
                title={a.title}
                price={a.price}
                link={`${a.id}`}
                key={`${i}${a.title}`}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Section;
