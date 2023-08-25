import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from 'axios'
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Context";
const SignUp = ({ setShow, setToggle }) => {
  const router = useNavigate();
  const{state}=useContext(AuthContext)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
    role:"Buyer"
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.role &&
      userData.password &&
      userData.confirmedPassword
    ) {
      if (userData.password === userData.confirmedPassword) {
      const response=await axios.post("http://localhost:8003/register",{userData})
      if(response.data.success){
        setUserData({
          name: "",
          email: "",
          role:"Buyer",
          password: "",
          confirmedPassword: "",
        });
        setShow(true)
        toast.success(response.data.message);
      }else {
        toast.error(response.data.message);
      }
      }
      else {
        toast.error("Password & Confirm Password not matched");
      }
    }else{
      toast.error("All Fields are Compulsory")
    }
  };
  function selectRole(e){
    setUserData({...userData,role:e.target.value})
    }
    useEffect(()=>{
      if(state?.user?.name){
      router("/")
      }
      },[state])
  return (
    <div>
      <div className="opacity"></div>
      <div className="login">
        <div className="login1 ">
          <h2 className="fs-2rem">Signup</h2>
          <p>for a tailored experience</p>
          <span className="skip" onClick={() => setToggle(false)}>
            Skip
          </span>
        </div>

        <div className="login2">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userData.name}
              name="name"
              placeholder="Enter your Name"
              className="login-input"
              onChange={handleChange}
            />
            <input
              type="email"
              value={userData.email}
              name="email"
              placeholder="Enter your Email"
              className="login-input"
              onChange={handleChange}
            />
            <br />
            <select onChange={selectRole} value={userData.role} className="login-input">
              <option >Buyer</option>
              <option >Seller</option>
            </select>
            <br/>
            <input
              type="password"
              value={userData.password}
              name="password"
              placeholder="Create your Password"
              className="login-input"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              value={userData.confirmedPassword}
              name="confirmedPassword"
              placeholder="Confirm your Password"
              className="login-input"
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Continue" className="submit" />
          </form>
          <p style={{ marginTop: "15px" }}>
            {" "}
            Already have an Account?{" "}
            <b
              style={{ paddingBottom: "2px", borderBottom: "1px solid black" }}
              onClick={() => setShow(true)}
            >
              Login
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
