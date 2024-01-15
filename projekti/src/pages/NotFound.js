import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="https://bit-academy.vercel.app/*" />
      </Helmet>
      <div className="notFoundPage">
        <h1>404</h1>
        <Link to="/">Return to Homepage</Link>
      </div>
    </>
  );
};

export default NotFound;
