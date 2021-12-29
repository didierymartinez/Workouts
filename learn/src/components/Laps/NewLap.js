import React, { useContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import ActivitiesContext from "../../store/activities-context";
import WordsSearch from "./Glosary/WordsSearch";

const getArrayGlosary = (glosary) => {
  return Object.keys(glosary).map((x, id) => {
    return { id, display: x };
  });
};

const NewLap = () => {
  const { addLap } = useContext(ActivitiesContext);
  const [val, setVal] = useState("");
  const [glosary, setGlosary] = useState([]);

  useEffect(() => {
    const dataGlosary = JSON.parse(localStorage.getItem("glosary"));
    setGlosary(getArrayGlosary(dataGlosary));
  }, []);

  const saveLap = (e) => {
    e.preventDefault();
    if (val) {
      const result = addLap({ id: uuid(), start: new Date(), resume: val });
      if (result.modified) {
        setGlosary(getArrayGlosary(result.glosary));
      }
      setVal("");
    }
  };

  const handleChange = (value) => {
    setVal(value);
  };

  document.onkeyup = function (e) {
    if (e.ctrlKey && e.key === "Enter") {
      saveLap(e);
    }
  };

  return (
    <section className="newLapContainer">
      <WordsSearch onChange={handleChange} value={val} glosary={glosary} />
      <button onClick={saveLap}>+</button>
    </section>
  );
};

export default NewLap;
