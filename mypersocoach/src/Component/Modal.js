import React, { useEffect, useState, useRef } from "react";
import './Problem.css';
import ModalGoal from "./ModalGoal";



const nl2br = require('react-nl2br');

const Modal = ({id, text1, text2, icon})  =>{

  const node = useRef();

  const [open, setOpen] = useState(false);

  console.log('ici :' + open)

  
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      console.log('ici 2 :' + node.current.contains(e.target));
      
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };
  

  const handleChange = () => {
    setOpen(false);
  };

  

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
  // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


return(

 <div className="displayModalCentered">
     
     <div className="image_icon" ref={node}  onClick={e => setOpen(!open)}>

        <div >
          
          
          <img  onClick={e => handleChange(id, text1, text2, icon)} alt="icon" src={icon} />
        
          
          {open && (<ModalGoal id={id} text2={nl2br(text2)} src={icon} show={setOpen} />)}
      
        </div>
       
      </div> 

      <div>
          <p >{text1}</p>
      </div>

  </div>

)
}


export default Modal;