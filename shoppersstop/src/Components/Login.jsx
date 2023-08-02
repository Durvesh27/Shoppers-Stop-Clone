import React, { useEffect } from 'react'
import './Login.css'
import { useState } from 'react'
const Login = ({ setToggle, setShow, setLogged }) => {
  const [user, setUser] = useState({ email: "", password: "" })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      const users = JSON.parse(localStorage.getItem("Users"))
      users.forEach((item) => {
        if (item.email === user.email && user.password === item.password) {
          localStorage.setItem("Current", JSON.stringify(user))
          alert("Login Successfull")
          setUser({ email: "", password: "" })
          setToggle(false)
          setLogged(true)
        } else {
          alert("Please fill correct details ")
          setUser({ email: "", password: "" })
        }
      })

    } else {
      alert("Please fill all fields")
    }

  }


  return (
    <div>
      <div className='opacity'></div>
      <div className="login">
        <div className="login1 ">
          <h2 className='fs-2rem'>Login</h2>
          <p>for a tailored experience</p>
          <span className='skip' onClick={() => setToggle(false)}>Skip</span>
        </div>
        <div className="login3">
          <form onSubmit={handleSubmit}>
            <input type="email" value={user.email} name="email" placeholder='Enter your Email' className='login-input' onChange={handleChange} /><br />
            <input type="password" value={user.password} name="password" placeholder='Enter your Password' className='login-input' onChange={handleChange} /><br />
            <input type="submit" value="Login" className='submit' />
          </form>
          <p style={{ marginTop: "15px" }}> New to Shoppers-Stop?   <b style={{ paddingBottom: "2px", borderBottom: "1px solid black" }} onClick={() => setShow(false)}>Sign-Up</b></p>
        </div>
      </div>
    </div>
  )
}

export default Login
