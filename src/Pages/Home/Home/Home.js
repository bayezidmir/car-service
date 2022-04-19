import React from "react";
import Banner from "../../Banner/Banner";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home- Genius Car Service"></PageTitle>
      <Banner />
      <Services />
      <Experts />
    </div>
  );
};

export default Home;
