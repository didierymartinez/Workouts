import React from "react";
import Hour from "./Helpers/Hour";

const Lap = (props) => {
    return (
        <li className="lap">
            <p>
                <Hour className="hourlap" date={props.start}></Hour>
                {props.resume}
            </p>
        </li>
    );
}

export default Lap;