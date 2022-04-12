import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ data }) => {
  const { id, name, price, description, img } = data;
  console.log(data);
  const navigate = useNavigate();

  const serviceDetail = (serviceID) => {
    navigate(`/service/${serviceID}`);
  };

  return (
    <div className="service-container">
      <img src={img} alt="" />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <h4>Price: {price}</h4>
      <button className="btn btn-primary" onClick={() => serviceDetail(id)}>
        Book Now
      </button>
    </div>
  );
};

export default Service;
