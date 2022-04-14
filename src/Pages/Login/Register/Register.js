import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState("");
  const [terms, setTerms] = useState(false);

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
        <div className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Accept Terms & Condition" /> */}

          <input
            type="checkbox"
            name="terms"
            id="terms"
            onClick={() => setTerms(!terms)}
          />
          {/* className={terms ? "text-primary" : "text-danger"} */}
          <label
            htmlFor="terms"
            className={`ps-2 ${terms ? "text-primary" : "text-danger"}`}
          >
            Accept Terms & Condition
          </label>
        </div>
        <div>
          <input
            type="submit"
            value="Sign Up"
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

      <SocialLogIn />
    </div>
  );
};

export default Register;
