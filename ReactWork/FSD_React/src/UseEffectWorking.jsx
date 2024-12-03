import React, { useEffect, useState } from 'react';  

const UseEffectWorking = () => {  
  const [count, setCount] = useState(10); // State to keep track of count  

  const change = () => {  
    setCount(prevCount => prevCount + 1); // Update count when the button is clicked  
  };  

  useEffect(() => {  
    console.log("Component rendered: " + count);  
  }, [count]);
  return (  
    <div>  
      <div>UseEffectWorking</div>  
      <div>Count: {count}</div> {}  
      <button onClick={change}>Do Changes</button>
    </div>  
  );  
};  

export default UseEffectWorking;