import React from 'react'
import {BrowserRouter, Route , Routes }from 'react-router-dom';
import ViewUsers from './Pages/ViewUsers';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/viewusers" element={<ViewUsers/>} ></Route>
        <Route path="*" element={<h1>404 error</h1>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
