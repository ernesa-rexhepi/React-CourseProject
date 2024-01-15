import React, { useContext, useState } from "react";
import style from "../style/login.module.css";
import { MainContext } from "../context/MainContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/login" />
      </Helmet>
      <div className={style.mainWrapper}>
        <div className={style.input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            if (username === "" && password === "") {
              toast.warning("Please enter your username and password", {
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
              login(username, password);
            }
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
