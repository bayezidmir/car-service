import React from "react";
import "./SocialLogIn.css";
import googleIcon from "../../../Images/social/google.png";
import faceBook from "../../../Images/social/facebook.png";
import github from "../../../Images/social/github.png";

const SocialLogIn = () => {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="line"></div>
        <p className="mt-2 mx-1">or</p>
        <div className="line"></div>
      </div>
      <button className="btn btn-dark w-50 p-2 mb-2">
        <img src={googleIcon} alt="" /> Sign in with Google
      </button>{" "}
      <br />
      <button className="btn btn-success text-light w-50 p-2 mb-2">
        <img src={faceBook} alt="" /> Sign in with Facebook
      </button>
      <br />
      <button className="btn btn-warning  w-50 p-2 ">
        <img src={github} alt="" /> Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogIn;
