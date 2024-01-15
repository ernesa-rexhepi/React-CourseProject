import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Filters from "../components/products/Filters";
import Footer from "../components/Footer";
import Section from "../components/homepage/Section";
import { MainContext } from "../context/MainContext";
import { Helmet } from "react-helmet";

const Products = () => {
  const { products } = useContext(MainContext);

  const [category, setCategory] = useState("all");

  console.log(category);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/products" />
      </Helmet>
      <Navbar />
      <Filters setState={setCategory} />
      {category === "all" ? (
        <Section array={products} />
      ) : (
        <Section
          array={products.filter((product) => product.category === category)}
        />
      )}

      <Footer />
    </>
  );
};

export default Products;
