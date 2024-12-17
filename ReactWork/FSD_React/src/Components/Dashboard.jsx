import React from 'react'

function Dashboard({rdata}) {

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>welcome {rdata.email}</h3>
    </div>
  )
}

export default Dashboard
