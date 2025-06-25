import React from "react";
import FormInput from "../../components/FormInput";
import "./signUp.css";
import LargeButton from "../../components/LargeButton";
import SmallButton from "../../components/SmallButton";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate("/login")
  }

   function signUp(formData) {  
      const fullname= formData.get("fullname");
      const email=formData.get("email");
      const username = formData.get("username");
      const password = formData.get("password");
      console.log(username);
      console.log(password);
      console.log(fullname);
      console.log(email);      
    }
  return (
    <div className="container">
      <div className="left-side">
        <p className="signup-text">Sign Up</p>
        <form action={signUp}>
          <FormInput placeholder="Full Name" type="text" name="fullname"/>
          <FormInput placeholder="Username" type="text" name="username"/>
          <FormInput placeholder="Email Address" type="email" name="email"/>
          <FormInput placeholder="Password" type="password" name="password"/>
          <FormInput placeholder="Confirm Password" type="password" />
          <LargeButton label="Sign up" type="submit"/>
        </form>
        <div className="mini-container">
          <div>
            <p className="have-account">Already have an account?</p>
          </div>
          <div>
          <SmallButton onClick={navigateTo} label="login"/>
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
}

export default SignUp;
