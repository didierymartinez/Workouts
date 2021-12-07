import React from "react";

const Hour = (props) =>{
    
  const date = new Date(props.date);
  const strTime = props.date ? date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }): '' 
    return (
        <span className={props.className}>{strTime}</span>
    );
}

export default Hour