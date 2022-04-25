import "./Services.css";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import useServices from "../../../Hooks/useServices";

const Services = () => {
  const [services, setServices] = useServices();

  return (
    <div className="container" id="services">
      <h2 className="text-primary">Services Available</h2>
      <hr />
      <div className="services-container">
        {services.map((service) => (
          <Service data={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
