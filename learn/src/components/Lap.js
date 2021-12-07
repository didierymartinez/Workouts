import React from "react";
import Hour from "./Helpers/Hour";

const Lap = (props) => {
    return(
        <li className="lap">
            <Hour className="hourlap" date={props.start}></Hour>
            <p>{props.resume}</p>
        </li>
    );

}

export default Lap;