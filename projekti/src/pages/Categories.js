import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/homepage/Section";
import tech from "../assets/tech.webp";
import men from "../assets/clothesMan.jpg";
import women from "../assets/clothesWomen.jpg";
import style from "../style/categories.module.css";
import { Helmet } from "react-helmet";

const Categories = () => {
  const categories = [
    {
      title: "Electronics",
      image: tech,
      link: "/category/1",
    },
    {
      title: "Men's Clothing",
      image: men,
      link: "/category/2",
    },
    {
      title: "Women's Clothing",
      image: men,
      link: "/category/2",
    },
    {
      title: "Jewelery",
      image: women,
      link: "/category/3",
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Categories</title>
        <link
          rel="canonical"
          href="https://bit-academy.vercel.app/categories"
        />
      </Helmet>
      <Navbar />
      <div className={style.container}>
        <Section array={categories} />
      </div>
      <Footer />
    </>
  );
};

export default Categories;
