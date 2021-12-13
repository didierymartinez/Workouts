import React from "react";
import Sesion from "./Sesion"

const SesionList = ({ sesions }) => {
    return (
        <main>
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
        </main>
    );
}

export default SesionList;