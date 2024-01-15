import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartWrapper from "../components/cart/CartWrapper";
import { Helmet } from "react-helmet";

const Cart = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/cart" />
      </Helmet>
      <Navbar />

      <CartWrapper />

      <Footer />
    </>
  );
};

export default Cart;
