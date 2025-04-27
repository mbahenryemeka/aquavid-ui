import React from "react";
import FormInput from "../../components/FormInput";
import "./signUp.css";
import LargeButton from "../../components/LargeButton";
import SmallButton from "../../components/SmallButton";

function SignUp() {
  return (
    <div className="container">
      <div className="left-side">
        <p className="signup-text">Sign Up</p>
        <FormInput placeholder="Full Name" type="text" />
        <FormInput placeholder="Username" type="text" />
        <FormInput placeholder="Email Address" type="email" />
        <FormInput placeholder="Password" type="password" />
        <FormInput placeholder="Confirm Password" type="password" />
        <LargeButton label="Sign up" />
        <div className="mini-container">
          <div>
            <p className="have-account">Already have an account?</p>
          </div>
          <div>
          <SmallButton label="login"/>
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
