import React, { useContext } from 'react'
import { StudentContext } from '../Appcontext';

const Child2 = () => {
const child2data = useContext(StudentContext);

  return (
    <div>
      <h2>of branch {child2data.branch}</h2>
    </div>
  )
}

export default Child2
