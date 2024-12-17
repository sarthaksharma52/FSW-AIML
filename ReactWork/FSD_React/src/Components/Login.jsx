import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({rdata}) => {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate = useNavigate();

  // console.log(rdata);

  function varification(){
    if(rdata.email == email){
      alert("user is valid");
      navigate("/dashboard");

    }else{
      alert("user is invalid");
    }
  }
  return (
    <div>
      <h1 style={{color:'white',backgroundColor:'orange',width:'300px', alignContent:'center'}}>Login</h1>
      <form>
  
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" onClick={varification} className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
