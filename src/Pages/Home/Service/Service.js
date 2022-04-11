import React from "react";
import "./Service.css";

const Service = ({ data }) => {
  const { name, price, description, img } = data;
  console.log(data);
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h6>{description}</h6>
      <h4>Price: {price}</h4>
      <button>Book Now</button>
    </div>
  );
};

export default Service;
