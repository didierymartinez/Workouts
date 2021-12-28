import React, { useContext, useRef } from "react";
import uuid from 'react-uuid';
import ActivitiesContext from "../../store/activities-context";

const NewLap = () => {
  const { addLap } = useContext(ActivitiesContext);
  const inputTxt = useRef();

  const saveLap = (e) => {
    e.preventDefault();
    if (inputTxt.current.value) {
      addLap({ id: uuid(), start: new Date(), resume: inputTxt.current.value });
      inputTxt.current.value = "";
    }
  };

  const addlap = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      saveLap(e);
    }
  };

  return (
    <section className="newLapContainer">
      <textarea ref={inputTxt} className="newLap" onKeyDown={addlap}></textarea>
      <button onClick={saveLap}>+</button>
    </section>
  );
};

export default NewLap;
