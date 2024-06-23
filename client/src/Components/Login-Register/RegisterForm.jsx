import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation minimale côté client
    if (!username || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .post("https://example.com/api/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        // Afficher un message à l'utilisateur ou rediriger vers une nouvelle page
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        // Afficher un message d'erreur à l'utilisateur
      });

    // Réinitialiser les champs du formulaire après soumission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-box register">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" className="button">
          Register
        </button>
        <div className="register-link">
          <p>
            Already have an account?{" "}
            <button type="button" className="link-button" onClick={switchToLogin}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
