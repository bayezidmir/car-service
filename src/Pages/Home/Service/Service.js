import React from "react";
import "./Service.css";

const Service = ({ data }) => {
  const { name, price, description, img } = data;
  console.log(data);
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <h4>Price: {price}</h4>
      <button className="btn btn-primary">Book Now</button>
    </div>
  );
};

export default Service;
