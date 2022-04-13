import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const [user, setUser] = useState({ value: "", error: "" });
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({ value: userCredential, error: "" });
      })
      .catch((errors) => {});
    setUser({ value: "", error: "There is something wrong" });
  };

  return (
    <div>
      <h2>Please Login</h2>
      <Form className="container w-50" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
        <p>
          Do not have an Account?{" "}
          <Link to="/register" className="text-danger text-decoration-none">
            Please Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
