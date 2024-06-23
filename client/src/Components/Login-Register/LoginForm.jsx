import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ switchToRegister }) => {
  return (
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
        <button type="submit" className="button">
          Login
        </button>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <button type="button" className="link-button" onClick={switchToRegister}>
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
