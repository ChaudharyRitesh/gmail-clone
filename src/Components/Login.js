import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import logo from "../assets/logo.png";
import { auth, provider } from "../firebase";
import { login } from "../features/userSlice";
import "../styles/Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    console.log("loginnn");
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
