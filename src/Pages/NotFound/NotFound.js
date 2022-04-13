import React from "react";
import Error from "../../../src/Images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center text-danger">Error 404</h1>
      <img src={Error} alt="" />
    </div>
  );
};

export default NotFound;
