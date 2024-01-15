import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [wait, setWait] = useState(false);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [cart, setCart] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API}products`)
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axios
      .get(`${process.env.REACT_APP_API}products/categories`)
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const login = (username, password) => {
    axios
      .post(`${process.env.REACT_APP_API}auth/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.token);
        toast.success("Logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        localStorage.setItem("token", response.data.token);

        navigate("/add-product");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const createProduct = (title, price, desc, img, category) => {
    setWait(true);
    axios
      .post(`${process.env.REACT_APP_API}products`, {
        title: title,
        price: price,
        description: desc,
        image: img,
        category: category,
      })
      .then((res) => {
        console.log(res.data);
        setWait(false);
        toast.success("Product created successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserCart = (userId) => {
    axios
      .get(`${process.env.REACT_APP_API}carts/user/${userId}`)
      .then((res) => {
        console.log(res.data);
        setCart(res.data[0].products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSingleProducts = (id) => {
    axios
      .get(`${process.env.REACT_APP_API}products/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContext.Provider
      value={{
        products,
        categories,
        login,
        createProduct,
        wait,
        getUserCart,
        cart,
        getSingleProducts,
        singleProduct,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
