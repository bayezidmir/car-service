import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h3>Here is the details of service : {serviceId}</h3>
      <Link to="/checkout" className="btn btn-warning">
        Proceed CheckOut
      </Link>
    </div>
  );
};

export default ServiceDetail;
