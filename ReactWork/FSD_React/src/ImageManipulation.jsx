import React, { useState } from 'react';  
import './image.css';  
import cat from './anuj.png';  

function ImageManipulation() {  
  const [height, setHeight] = useState(100);  
  const [width, setWidth] = useState(100); // Added state for width  
  const [red, setRed] = useState(0); // Initializing to 0  
  const [green, setGreen] = useState(0); // Initializing to 0  
  const [blue, setBlue] = useState(0); // Initializing to 0  
  const [rotation, setRotation] = useState(0); // Added rotation state  

  function enhanceHeight() {  
    setHeight(height + 20);  
  }  

  function enhanceWidth() {  
    setWidth(width + 20); // Functionality to enhance width  
  }  

  function changeColor() {  
    setRed(Math.floor(Math.random() * 256));  
    setGreen(Math.floor(Math.random() * 256));  
    setBlue(Math.floor(Math.random() * 256));  
  }  

  function imageRotate() {  
    setRotation(rotation + 30); 
  }  

  return (  
    <div className='imageCard'> 
      <div className='catdiv' style={{ backgroundColor: `rgb(${red},${green},${blue})` }}>  
        <img  
          src={cat}  
          height={height}  
          width={width} 
          alt='cat Image'  
          style={{ transform: `rotate(${rotation}deg)` }} 
        />  
      </div>  
      <div className='buttondiv'>  
        <button onClick={enhanceHeight} style={{ backgroundColor: 'orange' }}>  
          Enhance Height  
        </button>  
        &nbsp; &nbsp; &nbsp; &nbsp;  
        <button onClick={enhanceWidth}>Enhance Width</button>  
        <br />  
        &nbsp;  
        <button onClick={imageRotate}>Image Rotate</button>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
        <button onClick={changeColor}>Color Change</button>  
      </div>  
    </div>  
  );  
}  

export default ImageManipulation;