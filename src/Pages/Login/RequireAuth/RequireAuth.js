import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const EmailVerification = async () => {
    await sendEmailVerification();
    toast.success("Sent!");
  };

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //user.providerData[0].providerId === "password" -- this is to not ask email verification while doing social login
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h2 className="text-danger">Please Verify your email!</h2>
        <button className="btn btn-success" onClick={EmailVerification}>
          Send Verification Email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
