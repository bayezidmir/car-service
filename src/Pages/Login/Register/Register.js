import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Register = () => {
  const [terms, setTerms] = useState(false);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    console.log("user:", user);
  }

  if (loading) {
    return <Loading />;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    navigate("/");
  };

  return (
    <div className="container mx-auto w-50">
      <PageTitle title="Register- Genius Car Service"></PageTitle>
      <h1>Register</h1>
      <form className="registration-form" onSubmit={handleSignUp}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input type="email" name="email" id="" placeholder="Your Email" />
        <input type="password" name="password" id="" placeholder="Password" />

        <div className="mb-3 ">
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
            disabled={!terms}
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
