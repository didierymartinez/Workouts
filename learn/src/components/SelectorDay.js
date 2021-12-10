import React, { useContext } from "react";
import ActivitiesContext from "../store/activities-context"
import Today from "./Helpers/Today"

import "./SelectorDay.css"
import Arrow from "./UI/Arrow";


const SelectorDay = () => {

    const { prevDay, currentDay, nextDay } = useContext(ActivitiesContext);

    return (
        <section className="SelectorDay">
            <button onClick={prevDay}><Arrow left={true}></Arrow></button>
            <Today value={currentDay}></Today>
            <button onClick={nextDay}><Arrow></Arrow></button>
        </section>
    );
}

export default SelectorDay;