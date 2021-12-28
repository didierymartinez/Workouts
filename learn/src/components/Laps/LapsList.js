import React from "react";
import Lap from "./Lap"
import NewLap from "./NewLap"

const LapsList = ({ finished, laps }) => {
    return (
        <section className="session-laps">
            { finished && <NewLap></NewLap> }
            <ul>
                {laps.map((lap, index) => {
                    return <Lap
                        key={index}
                        start={lap.start}
                        resume={lap.resume}
                    ></Lap>
                })}
            </ul>
        </section>
    );

}

export default LapsList;