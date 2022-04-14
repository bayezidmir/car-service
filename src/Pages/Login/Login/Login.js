import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../../Shared/SocialLogIn/SocialLogIn";

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
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert`Password reset email sent`;
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>
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
          <span className="text-primary label btn" onClick={passwordReset}>
            Reset Password
          </span>
        </p>
      </Form>
      <SocialLogIn />
    </div>
  );
};

export default Login;
