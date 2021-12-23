import React from "react";
import Hour from "./Helpers/Hour";
import ReactHtmlParser from 'react-html-parser'

const Lap = (props) => {

    const html = ReactHtmlParser(props.resume.replaceAll('.#', '<strong>').replaceAll('#.', '</strong>'))
    return (
        <li className="lap">
            <div>
                <Hour className="hourlap" date={props.start}></Hour>
                {html}
            </div>
        </li>
    );
}

export default Lap;