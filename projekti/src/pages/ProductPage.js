import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "../style/products.module.css";
import Dress from "../assets/dress.jpg";
import Hoodie from "../assets/hoodie.jpg";
import Shoes from "../assets/shoes.jpg";
import { Pagination } from "swiper/modules";
import { MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ProductPage = () => {
  const { id } = useParams();

  const { getSingleProducts, singleProduct } = useContext(MainContext);

  useEffect(() => {
    getSingleProducts(id);
  }, []);

  console.log(singleProduct);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/" />
      </Helmet>
      {singleProduct.id != null ? (
        <div className={style.productPage}>
          <div className={style.Slider}>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className={style.ProductsSlider}
            >
              <SwiperSlide
                className={style.ProductsSliderPic}
                style={{ backgroundImage: `url(${singleProduct.image})` }}
              ></SwiperSlide>
            </Swiper>
          </div>
          <div className={style.ProductDescription}>
            <h1>{singleProduct.title}</h1>
            <h2>{singleProduct.price}</h2>
            <p>Zgjedh madhesine:</p>
            <div className={style.SizeButtons}>
              <button className={style.Buttons}>S</button>
              <button className={style.Buttons}>M</button>
              <button className={style.Buttons}>L</button>
              <button className={style.Buttons}>XL</button>
            </div>
            <h4>Rating: {singleProduct.rating.rate}</h4>
            <button className={style.startButton}>
              {" "}
              <MdShoppingCart size={20} /> Shto ne Shporte
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductPage;
