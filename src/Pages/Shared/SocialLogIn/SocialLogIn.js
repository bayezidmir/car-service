import React, { useState } from "react";
import "./SocialLogIn.css";
import googleIcon from "../../../Images/social/google.png";
import faceBook from "../../../Images/social/facebook.png";
import github from "../../../Images/social/github.png";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogIn = () => {
  const [user, setUser] = useState({ value: "", error: "" });
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser({ value: result, error: "" });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        setUser({ value: "", error: "Something went wrong" });
        console.log(error);
      });
  };

  const handleGitHubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser({ value: result, error: "" });
        navigate("/");
      })
      .catch((error) => {
        setUser({ value: "", error: "something went wrong" });
      });
  };

  return (
    <div className="m-3">
      {user?.error && user?.error}
      <div className="d-flex justify-content-center align-items-center ">
        <div className="line"></div>
        <p className="mt-2 mx-1">or</p>
        <div className="line"></div>
      </div>
      <button
        className="btn btn-dark w-50 p-2 mb-2"
        onClick={handleGoogleSignIn}
      >
        <img src={googleIcon} alt="" /> Sign in with Google
      </button>{" "}
      <br />
      <button className="btn btn-success text-light w-50 p-2 mb-2">
        <img src={faceBook} alt="" /> Sign in with Facebook
      </button>
      <br />
      <button
        className="btn btn-warning  w-50 p-2 "
        onClick={handleGitHubLogIn}
      >
        <img src={github} alt="" /> Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogIn;
