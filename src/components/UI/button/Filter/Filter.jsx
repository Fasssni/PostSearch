import React from "react";
import classes from "./Filter.module.css"

const Filter=({options, defaultValue, value, onChange})=>{


  


    return(
    <div className={classes.MyFlt}>
         <hr style={{margin:"5px 15px",width:"100%"}}></hr>
          <label for="options">Отсортируйте списки</label><br/>
          
            <select id="options"   
            value={value}
            onChange={event=>onChange(event.target.value)}>
                <option disabled>{defaultValue}</option>
                {options.map((p)=>
                <option value={p.value} key={p.value}>{p.name}</option>
                
                
                )} 
      
                
                
           
            </select>
            
            
          </div>)
}

export default Filter;