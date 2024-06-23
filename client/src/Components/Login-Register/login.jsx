import React, { useState } from "react";
import "./login.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="home-link">
        <a href="/" className="button home-button">
          ← Home
        </a>
      </div>
      <LoginForm switchToRegister={registerLink} />
      <RegisterForm switchToLogin={loginLink} />
    </div>
  );
};

export default Login;
