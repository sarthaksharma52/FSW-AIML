import React, { useContext } from 'react'
import { StudentContext } from '../Appcontext';

const Child1 = () => {
  const child1data = useContext(StudentContext);
  return (
    <div>
      <h1>hello {child1data.name}</h1>
    </div>
  )
}

export default Child1
