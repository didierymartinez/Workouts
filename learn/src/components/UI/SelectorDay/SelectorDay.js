import React, { useContext } from "react";
import ActivitiesContext from "../../../store/activities-context"
import Today from "../../Helpers/Today"

import "./SelectorDay.css"
import Arrow from "../Arrow";


const SelectorDay = () => {

    const { prevDay, currentDay, nextDay } = useContext(ActivitiesContext);

    return (
        <section className="SelectorDay">
            <button aria-label="previous" onClick={prevDay}><Arrow left={true}></Arrow></button>
            <Today value={currentDay}></Today>
            <button aria-label="next" onClick={nextDay}><Arrow></Arrow></button>
        </section>
    );
}

export default SelectorDay;