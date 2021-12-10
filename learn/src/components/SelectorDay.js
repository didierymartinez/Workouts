import React, { useContext } from "react";
import ActivitiesContext from "../store/activities-context"
import Today from "./Helpers/Today"

import "./SelectorDay.css"


const SelectorDay = () => {

    const { prevDay, currentDay, nextDay } = useContext(ActivitiesContext);

    return (
        <section className="SelectorDay">
            <button onClick={prevDay}>&#60;</button>
            <Today value={currentDay}></Today>
            <button onClick={nextDay}>&#62;</button>
        </section>
    );
}

export default SelectorDay;