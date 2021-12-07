import React from "react";
import Lap from "./Lap"

const LapsList = ({ laps }) => {
    return (
            <ul>
                {laps.map((lap, index) => {
                    return <Lap
                        key={index}
                        start={lap.start}
                        resume={lap.resume}
                    ></Lap>
                })}
            </ul>
    );

}

export default LapsList;