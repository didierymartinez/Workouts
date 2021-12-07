import React from "react";
import Sesion from "./Sesion"

const SesionList = ({ sesions }) => {
    const totalTime = sesions.reduce((ac, cur) => {
        if(!cur.end){
            return ac;
        }
        const diff = Math.abs(new Date(cur.end) - new Date(cur.start));
        const minutes = Math.floor((diff / 1000) / 60) / 60;
        return ac += minutes
    }, 0)


    return (
        <section>
            Horas totales: {totalTime}
            <ul className="sesionList">
                {
                    sesions.map((sesion, index) => {
                        return <Sesion
                            key={index}
                            name={sesion.name}
                            start={sesion.start}
                            end={sesion.end}
                            laps={sesion.laps}
                        ></Sesion>
                    })
                }
            </ul>
        </section>
    );

}

export default SesionList;