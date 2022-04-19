import React from "react";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle title="About- Genius Car Service"></PageTitle>
      <h2>This is about us</h2>
      <Link to="company">Company</Link>
      <Link to="services">Services</Link>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default About;
