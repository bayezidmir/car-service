import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Login = () => {
  const [user, setUser] = useState({ value: "", error: "" });
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ value: userCredential, error: "" });
        navigate(from, { replace: true }); //Line to work on
      })
      .catch((errors) => {});
    setUser({ value: "", error: "There is something wrong" });
  };

  const passwordReset = () => {
    const email = emailRef.current.value;

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast("email sent");
        })
        .catch((error) => {});
    } else {
      toast("Please enter email address");
    }
  };

  return (
    <div>
      <h2>Please Login</h2>
      <PageTitle title="Login- Genius Car Service"></PageTitle>
      <Form className="container w-50" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Sign In
        </Button>
        <p className="mt-3">
          Do not have an Account?{" "}
          <Link to="/register" className="text-primary text-decoration-none ">
            Please Register
          </Link>
        </p>
        <p>
          Forgot Password?{" "}
          <button
            className="text-primary label btn btn-link"
            onClick={passwordReset}
          >
            Reset Password
          </button>
        </p>
      </Form>
      <SocialLogIn />
      <ToastContainer />
    </div>
  );
};

export default Login;
