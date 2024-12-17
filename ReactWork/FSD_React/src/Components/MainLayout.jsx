import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <nav>
            <ul style={{backgroundColor:'black'}}>
                <li style={{display:'inline',paddingRight:'15px'}}><Link to='/login' style={{color:'white'}}>Login</Link></li>
                <li style={{display:'inline'}}><Link style={{color:'white'}} to='/registration'>Registration</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout
