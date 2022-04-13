import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="container mx-auto w-50">
      <h1>Register</h1>
      <form className="registration-form">
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
    </div>
  );
};

export default Register;
