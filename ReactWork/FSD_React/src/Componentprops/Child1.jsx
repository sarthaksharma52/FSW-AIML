import React from 'react'
import Child2 from './Child2'

const Child1 = ({child1data}) => {

  return (
    <div>
      {/* <h1>Hello {child1data.name}</h1> */}
      <Child2 Child2data={child1data} />
    </div>
  )
}

export default Child1
