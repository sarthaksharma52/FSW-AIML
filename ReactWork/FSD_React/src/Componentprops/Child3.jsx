import React from 'react'

const Child3 = ({child3data}) => {
  return (
    <div>
      <h1>hello student of branch {child3data.branch}</h1>

      Name:{child3data.name}
      <br /><br />
      branch:{child3data.branch}
      <br /><br />
      section:{child3data.section}
      <br /><br />
      college:{child3data.college}
      <br /><br />
    </div>
  )
}

export default Child3
