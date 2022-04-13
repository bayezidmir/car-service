import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto w-50">
      <h1>Register</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input type="password" name="password" id="" placeholder="Password" />
        <div>
          <input
            type="submit"
            value="Submit"
            className="w-25 mx-auto bg-success btn btn-success"
          />
        </div>
      </form>
      <p>
        Already a member?{" "}
        <Link to="/login" className="text-danger text-decoration-none">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
