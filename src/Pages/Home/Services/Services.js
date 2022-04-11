import "./Services.css";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <h2>Services Available</h2>
      <hr />
      <div className="services-container">
        {services.map((service) => (
          <Service data={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
