import React from "react";
import cl from "./Modal.module.css";

const MyModal=({children})=>{
   
    return(
        <div className={[cl.MyModal,cl.active].join(" ")}>
          <div className={cl.MyModalContent}> 
         {children}
          </div>
        </div>
    )
}

export default MyModal;