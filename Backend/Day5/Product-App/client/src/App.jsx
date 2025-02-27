import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<h1>Signup Page</h1>}/>
          <Route path='/login' element={<h1>Login Page</h1>}/>
          <Route path='/viewproducts' element={<h1>View Products</h1>}/>
          <Route path='/addproducts' element={<h1>Add Products</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
