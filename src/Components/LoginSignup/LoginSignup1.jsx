import React, { useState } from "react";
import { globalVariable } from "../globalVariables";

import "./LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { Button } from '@chakra-ui/react';
// import { IconName } from 'react-icons/tfi';


// const [action, setAction] = useState("Sign Up");

import {
  Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react'
// const [name, setName] = useState("");
const name = globalVariable.name;
const email = globalVariable.email;
const password = globalVariable.password;

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
const LoginSignup = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState(globalVariable.name);
  const [email, setEmail] = useState(globalVariable.email);
  const [password, setPassword] = useState(globalVariable.password);
  const navigate = useNavigate();

  const handleSignup = async () => {
    let isproceed = true;
    let errormessage = "Please enter the required feilds";
    if (action === "Sign Up") {
      if (name === null || name === "" || password === null || password === "" || email === null || email === "") {
        alert(errormessage);
        console.log(errormessage);
      }
      else {
        try {
          const response = await axios.post(
            "https://mock-api-template-4.onrender.com/users",
            {
              "name": name,
              "email": email,
              "password": password

            }
          );
          console.log("response.data=" + response.status);
          if (response.status == 201) {
            alert(" User Signup Successful")
          }
          const token = response.data.token;
          //navigate("/dashboard");
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.");
        }
      }
    }
  };

  const handleLogin = async () => {
    let errormessage = "Please enter the required fields";
    if (action === "Login") {
      if (password === "" || email === "") {
        alert(errormessage);
        console.log(errormessage);
      }
      else {
        try {
          const response = await axios.get(
            `https://mock-api-template-4.onrender.com/users?email=${email}`

          );
          console.log(response.data);
          if (!response.data || response.data.length === 0) {
            alert("Email-id not valid");
            return;
          }
          else {
            // console.log("response.status=" + response.status);
            if (response.status === 200) { // Assuming successful login status code is 200
              const userData = response.data[0];
              const userPassword = userData.password;
              // console.log("User password:", userPassword);
              if (userPassword === password) {
                alert("User Login Successful")
                // < Alert status='error' >
                //   <><AlertIcon /><AlertTitle>User Login Successful1</AlertTitle><AlertDescription>User Login Successful11.</AlertDescription></>
                // </Alert >
                globalVariable.email = { email };
                globalVariable.name = { name };

                navigate("/Dashboard");
                return name, email;;

              }
              else {
                alert("Login failed. Please check your credentials.");
              }
              // const userData = response.data[0];

            }

          }
          const token = response.data.token;
          // Do something with the token
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.");
        }
      }
    }
  };

  return (

    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Forgot password ? <span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSignup();
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
            handleLogin();
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;



