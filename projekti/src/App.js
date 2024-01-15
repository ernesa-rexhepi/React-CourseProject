import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { MainProvider } from "./context/MainContext";
import Login from "./pages/Login";
import PrivateRoute from "./middleware/PrivateRoute";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainProvider>
        <Home />
      </MainProvider>
    ),
  },
  {
    path: "/products",
    element: (
      <MainProvider>
        <Products />
      </MainProvider>
    ),
  },
  {
    path: "/categories",
    element: (
      <MainProvider>
        <Categories />
      </MainProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <MainProvider>
        <About />
      </MainProvider>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainProvider>
        <PrivateRoute>
          <Cart />
        </PrivateRoute>
      </MainProvider>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <MainProvider>
        <ProductPage />
      </MainProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <MainProvider>
        <Login />
      </MainProvider>
    ),
  },
  {
    path: "/add-product",
    element: (
      <MainProvider>
        <PrivateRoute>
          <AddProduct />
        </PrivateRoute>
      </MainProvider>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  );
}

export default App;
