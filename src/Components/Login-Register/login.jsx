import React, { useState } from "react";
import "./login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [action, setAction] = useState('');
  
  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  return (
    <div className={`wrapper ${action}`}>
      <div className="home-link">
      <a href="/" className="button home-button">← Home</a>

      </div>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span>Forgot password?</span>
          </div>
          <button type="submit" className="button">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? 
              <button type="button" className="link-button" onClick={registerLink}>
                Register
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="button">Register</button>
          <div className="register-link">
            <p>
              Already have an account? 
              <button type="button" className="link-button" onClick={loginLink}>
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
