import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h3>Here is the details of service : {service.name}</h3>
      <Link to="/checkout" className="btn btn-warning">
        Proceed CheckOut
      </Link>
    </div>
  );
};

export default ServiceDetail;
