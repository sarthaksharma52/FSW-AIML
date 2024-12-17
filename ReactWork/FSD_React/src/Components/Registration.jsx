import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = ({regdata}) => {
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[myname,setName] = useState();
    const[mydata,setMyData] = useState();
    function getData(e){
        e.preventDefault();
        console.log(mydata);
        alert('jai shree Ram ' + ' your detais are ' + ' name ' + myname + ' email ' + email + ' password ' + password);
        const data = {
            myname,password,email
        }
        console.log(data);
        // setMyData(data);
        regdata(data);
    }

  return (
    <div>
      <h1 style={{color:'white',backgroundColor:'orange',width:'300px',paddingLeft:'50px'}}>Registration</h1>
        <div>{JSON.stringify(mydata)}</div>
        <form>
  <div className="form-group">
    <label for="exampleInputName1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name"/>
    <small id="nameHelp" className="form-text text-muted" ></small>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={getData}>Submit</button>
</form>
    </div>
  )
}

export default Registration