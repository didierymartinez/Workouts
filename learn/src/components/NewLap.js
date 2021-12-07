import React from "react";

const NewLap = (props) => {

    const addlap = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            const newLap = {
                start: new Date(),
                resume: e.target.value
            }
            props.onAddLap(newLap);
            e.target.value = '';
            e.preventDefault();
        }
    }

    return (
        <textarea className="newLap" onKeyDown={addlap}></textarea>
    );
}

export default NewLap;