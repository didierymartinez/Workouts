import React from "react";
import LapsList from "./LapsList";
import Hour from "./Helpers/Hour";

const Sesion = ({ name, start, end, laps }) => {

    const diff = Math.abs(new Date(end) - new Date(start));
    const minutes = Math.floor((diff/1000)/60);

    return (
        <li className="sesion">
            <section>
                <span className="sesion-name">{name}</span>
                <span className="sesion-totaltime">{minutes > 0 && `${minutes} Min`} </span>
                <section className="sesion-horas">
                    <Hour date={start}></Hour>
                    <Hour date={end}></Hour>
                </section>
            </section>
            <LapsList laps={laps}></LapsList>
        </li>
    );

}

export default Sesion;