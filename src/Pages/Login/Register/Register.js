import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        console.log(userCredential.user);
      })
      .then((error) => {
        setUser(error);
      });
  };

  return (
    <div className="container mx-auto w-50">
      <h1>Register</h1>
      <form className="registration-form" onSubmit={handleSignUp}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <input type="password" name="password" id="" placeholder="Password" />
        <div>
          <input
            type="submit"
            value="Submit"
            className="w-25 mx-auto bg-success btn btn-success"
            /* onClick={createUserName} */
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
