import React, { useState } from "react";
import "./Login.css";
import FormInput from "../../components/FormInput";
import LargeButton from "../../components/LargeButton";
import SmallButton from "../../components/SmallButton";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    // Function to update username state
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    // Function to update password state
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  return (
    <div className="container">
      <div className="left-side">
        <p className="login-text">Login</p>
         {/* Pass value and onChange to FormInput */}
         <FormInput 
          placeholder="Username" 
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
          required
        />
        <FormInput 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={handlePasswordChange} 
          required
        />       
        <p className="forget-password">forget password?</p> 
        <LargeButton label="Login" />
        <div className="account-signup-container">
          <div className="have-account">
            <p >Don't have an account?</p>
          </div>
          <div>
            <SmallButton label="Signup"/>
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


