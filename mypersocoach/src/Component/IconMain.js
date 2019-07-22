import React from "react";

import "../Component/IconMain.css";

const IconMain = ({icon,alt}) => {
  //"({icon})" est une props.
  //Cette props est liée à son composant appelé dans une autre page
  return (
    <>
      <div className="logo_container">
        <img src={icon} alt={alt} />
      </div>
      
     </>   
   
        
      
  );
};
export default IconMain;
