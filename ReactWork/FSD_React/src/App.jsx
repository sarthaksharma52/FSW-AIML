// import React from 'react'
// import Student from './Student';
// import logo from './anuj.png';

// function App() {
  // let a=20;
  // let mystyle={

  //   backgroundColor:'cyan',
  //   color:'red',
  //   border:'10px solid black',
  //   height:'100px'
  // }

// const studentdata={
//   college:"ABES EC",
//   name:"Sarthak Sharma",
//   roll:"2200321530149",
//   branch:"CSE_(AI-ML)",
//   pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//   section:"C"
// }

//   return (
//      <div style={{marginLeft:"300px"}}>
//      <Student data={studentdata} />








      {/* <Student  pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/>

      <Student college="ABES EC" pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/>

      <Student college="ABES EC" pic={<img src= {logo} height={100} width={100} />} roll="2200321530149" section="C" name = "Sarthak Sharma" branch = "CSE_(AI-ML)"/> */}
      // </div>







    // <div style={{color:'red'}}>
    //   <h2>ABES Engineering College</h2>
    //   <div style={mystyle}>{a}</div>
    //   <div>
    //     <Student/>
    //   </div>
    //   </div>
//   )

// }

// export default App

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ImageManipulation from './ImageManipulation'
// import UseEffectWorking from './UseEffectWorking'
import Registration from './Components/Registration'
import Login from './Components/Login'
import MainLayout from './Components/MainLayout';
import Dashboard from './Components/Dashboard';
function App() {

  const[shareData,setShareData] = useState();
  // const[dashData,useDashData] = useState();

  return (
    <div style={{marginLeft:"300px"}}>
      {/* <ImageManipulation />
      <UseEffectWorking/> */}
      {/* <Registration regdata={setShareData}/>
      <Login/> */}
    {JSON.stringify(shareData)}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route path='/login' element={<Login rdata={shareData}/>}/>
        <Route path='/registration' element={<Registration regdata={setShareData} />}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard rdata={shareData}/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App