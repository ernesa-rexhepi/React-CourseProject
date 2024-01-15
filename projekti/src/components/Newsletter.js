import React, { useState } from "react";
import style from "../style/homepage.module.css";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className={style.newsletter}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <button
        onClick={() => {
          if (email === "") {
            toast.error("Please fill out the input!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.success("Your email is in our list!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        }}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Newsletter;
