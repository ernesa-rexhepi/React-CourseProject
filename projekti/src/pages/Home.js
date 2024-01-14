import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/homepage/Slider";
import dress from "../assets/dress.jpg";
import hoodie from "../assets/hoodie.jpg";
import laptop from "../assets/laptop.jpg";
import shoes from "../assets/shoes.jpg";
import Section from "../components/homepage/Section";
import Newsletter from "../components/Newsletter";

import tech from "../assets/tech.webp";
import men from "../assets/clothesMan.jpg";
import women from "../assets/clothesWomen.jpg";
import Footer from "../components/Footer";
import { MainContext } from "../context/MainContext";
import { Helmet } from "react-helmet";

// const products = [
//   {
//     image: dress,
//     title: "Green Dress",
//     price: 25.99,
//     link: "/products/1",
//   },
//   {
//     image: hoodie,
//     title: "Hoodie",
//     price: 25.99,
//     link: "/products/2",
//   },
//   {
//     image: shoes,
//     title: "Adidas shoes",
//     price: 25.99,
//     link: "/products/3",
//   },
// ];

const categories = [
  {
    title: "Electronics",
    image: tech,
    link: "/category/1",
  },
  {
    title: "Clothing",
    image: men,
    link: "/category/2",
  },
  {
    title: "Jewelery",
    image: women,
    link: "/category/3",
  },
];

const Home = () => {
  const { products } = useContext(MainContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/" />
      </Helmet>
      <Navbar />
      <Slider images={[dress, hoodie, laptop, shoes]} />
      <Section
        title={"Our best products"}
        array={products
          .filter((product) => product.rating.rate > 4)
          .slice(0, 3)}
      />

      <Newsletter />
      <Section title={"Our Categories"} array={categories} />
      <Footer />
    </>
  );
};

export default Home;
