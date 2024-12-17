import React from 'react'
import Child3 from './Child3'

const Child2 = ({Child2data}) => {
  return (
    <div>
      {/* <h2>hello {Child2data.name}</h2> */}
      <Child3 child3data = {Child2data}/>
    </div>
  )
}

export default Child2
