import React, { useState } from 'react'

const SignUp = ({setShow,setToggle}) => {
  const [user,setUser]=useState({name:"",email:"",password:"",cart:[]})
const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
e.preventDefault();
if(user.name && user.email && user.password){
  const users= JSON.parse(localStorage.getItem("Users"))|| [];
  users.push(user)
  localStorage.setItem("Users",JSON.stringify(users))
  setUser({name:"",email:"",password:""})
  alert("Registeration Successfull")
  setShow(true)
}else{
  alert("Please fill all the details")
}
}
  return (
    <div>
       <div className='opacity'></div>
    <div className="login" >
    <div className="login1 ">
    <h2 className='fs-2rem'  >Signup</h2>
    <p>for a tailored experience</p>
    <span className='skip' onClick={()=>setToggle(false)}>Skip</span>
    </div>
  
    <div className="login2">
      <form onSubmit={handleSubmit}>
      <input type="text" value={user.name} name="name" placeholder='Enter your Name' className='login-input' onChange={handleChange}/>
      <input type="email" value={user.email} name="email" placeholder='Enter your Email' className='login-input' onChange={handleChange}/><br/>
      <input type="password" value={user.password} name="password" placeholder='Create your Password'className='login-input'onChange={handleChange}/><br/>
     <input type="submit" value="Continue" className='submit'/>
      </form>
      <p style={{marginTop:"15px"}}> Already have an Account?   <b style={{paddingBottom:"2px",borderBottom:"1px solid black"}} onClick={()=>setShow(true)}>Login</b></p>
    </div>
    

    </div>
    </div>

  )
}

export default SignUp
