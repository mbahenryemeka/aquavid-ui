import React, { useState } from "react";
import "./Login.css";
import FormInput from "../../components/FormInput";
import LargeButton from "../../components/LargeButton";
import SmallButton from "../../components/SmallButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to update username state
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to update password state
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigateTo = () => {
    navigate("/signup");
  };

  function login(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username);
    console.log(password);
  }

  return (
    <div className="container">
      <div className="left-side">
        <p className="login-text">Login</p>
        {/* Pass value and onChange to FormInput and  Wrap inputs and button inside a form*/}
        <form action={login}>
          <FormInput
            placeholder="Username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            name="username"
            required
          />
          <FormInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            name="password"
            required
          />
          <p className="forget-password">forget password?</p>
          {/* Trigger form submit */}
          <LargeButton label="Login" type="submit" />
        </form>
        <div className="account-signup-container">
          <div className="have-account">
            <p>Don't have an account?</p>
          </div>
          <div>
            <SmallButton onClick={navigateTo} label="Signup" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="center-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
