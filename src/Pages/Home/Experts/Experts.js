import React from "react";
import Willson from "../../../Images/experts/expert-1.jpg";
import Rimo from "../../../Images/experts/expert-2.jpg";
import Karlos from "../../../Images/experts/expert-3.jpg";
import Warner from "../../../Images/experts/expert-4.jpg";
import Richard from "../../../Images/experts/expert-5.jpg";
import Andrew from "../../../Images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Willson Gins", HourlyRate: 25, image: Willson },
    { id: 2, name: "Rimo Mason", HourlyRate: 32, image: Rimo },
    { id: 3, name: "Karlos Slim", HourlyRate: 50, image: Karlos },
    { id: 4, name: "Warner Ramos", HourlyRate: 15, image: Warner },
    { id: 5, name: "Richard Hills", HourlyRate: 20, image: Richard },
    { id: 6, name: "Andrew wilson", HourlyRate: 18, image: Andrew },
  ];

  return (
    <div className="container mx-auto mt-5 ">
      <h2 className="text-primary">Our Experts</h2>
      <div className="row ">
        {experts.map((expert) => (
          <Expert key={expert.id} data={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
