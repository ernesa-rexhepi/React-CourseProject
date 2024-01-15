import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token == null) {
      navigate("/login");
    }

    console.log(token);
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
