import React from 'react'
import Child1 from './Componentprops/Child1'

export default function Appprops() {

    const studentData = {
        name: "Sarthak Sharma",
        branch: "AIML",
        section: "B",
        college: "ABES EC"
    }

  return (
    <div>
      <Child1 child1data={studentData} />
    </div>
  )
}
