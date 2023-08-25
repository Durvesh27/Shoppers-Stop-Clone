import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { AuthContext } from "../Context";

const Login = ({ setToggle, setShow, setLogged }) => {
  const router = useNavigate();
  const { state,login } = useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
        const response = await axios.post("http://localhost:8003/login", { userData });
        if (response.data.success) {
            setUserData({ email: "", password: "" })
            router('/')
            toast.success(response.data.message)
            localStorage.setItem("Token3",JSON.stringify(response.data.token))
            login(response.data.user)
            setToggle(false)
        } else {
            toast.error(response.data.message)
        }
        console.log(response,"working")
    } else {
        toast.error("All fields are mandtory.")
    }
  };
  useEffect(() => {
    if (state?.user?.name) {
      router("/");
    }
  }, [state]);

  return (
    <div>
      <div className="opacity"></div>
      <div className="login">
        <div className="login1 ">
          <h2 className="fs-2rem">Login</h2>
          <p>for a tailored experience</p>
          <span className="skip" onClick={() => setToggle(false)}>
            Skip
          </span>
        </div>
        <div className="login3">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={userData.email}
              name="email"
              placeholder="Enter your Email"
              className="login-input"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              value={userData.password}
              name="password"
              placeholder="Enter your Password"
              className="login-input"
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Login" className="submit" />
          </form>
          <p style={{ marginTop: "15px" }}>
            {" "}
            New to Shoppers-Stop?{" "}
            <b
              style={{ paddingBottom: "2px", borderBottom: "1px solid black" }}
              onClick={() => setShow(false)}
            >
              Sign-Up
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
