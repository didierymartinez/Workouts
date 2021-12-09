import React, { useContext } from "react";
import ActivitiesContext from '../store/activities-context'

const NewLap = () => {
    
    const { addLap } = useContext(ActivitiesContext);

    const addlap = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            addLap({ start: new Date(), resume: e.target.value });
            e.target.value = '';
            e.preventDefault();
        }
    }

    return (
        <textarea className="newLap" onKeyDown={addlap}></textarea>
    );
}

export default NewLap;