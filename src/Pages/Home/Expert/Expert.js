import React from "react";

const Expert = ({ data }) => {
  console.log(data);
  const { name, image, HourlyRate } = data;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-5 ">
      <div className="card">
        <img src={image} className="card-img-top img-fluid " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p>
            {" "}
            <strong>Hire For:</strong> {HourlyRate}/ hour
          </p>
          <a className="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  );
};

export default Expert;
