import React from "react";
import "./index.scss";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className="container">
        <div className="error-inner">
          <h1>Error 404</h1>
          <p>Page Not Found</p>
          <button onClick={goToHomePage}>Dashboard</button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
