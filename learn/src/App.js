import React, { useState, useEffect } from "react"
import SesionList from "./components/SesionsList"
import Today from "./components/Helpers/Today"

import "./App.css"
import NewLap from "./components/NewLap"


function App() {

  var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    

  const date = localISOTime.split('T')[0].replaceAll('-','');
  const sesions = JSON.parse(localStorage.getItem('activities_' + date)) || [];

  const [sesionsList, setSesionsList] = useState(sesions);
  const [activeSession, setActiveSession] = useState();

  useEffect(() => {
    if(sesionsList.length == 0){
      return
    }
    localStorage.setItem('activities_' + date, JSON.stringify(sesionsList))
  }, [sesionsList])

  const addSesion = () => {

    setSesionsList((prev) => {
      const newList = [{
        name: "S" + (sesionsList.length + 1),
        start: new Date().toISOString(),
        laps: []
      }, ...prev]
      return newList;
    });
  }

  const endSession = () => {
    setSesionsList((prev) => {
      const newMod = [...prev];
      if(newMod[0].laps.length == 0){
        newMod[0].start = new Date().toISOString();
        newMod[0].end = undefined;
      }else{
        newMod[0].end = new Date().toISOString();
      }
      return newMod;
    }) 
  }

  const addLap = (lap) => {

    setSesionsList((prev) => {
      const modif = JSON.parse(JSON.stringify(prev));
      modif[0].laps.unshift(lap);
      return modif;
    });
  }

  return (
    <div>
      <Today></Today>
      {sesionsList[0] && !sesionsList[0].end ?
        <button className="addSession" onClick={endSession} >Terminar sesión de estudio</button>
        :
        <button className="addSession" onClick={addSesion} >Iniciar sesión de estudio</button>
      }

      <NewLap onAddLap={addLap}></NewLap>
      
      <SesionList
        sesions={sesionsList}
        onAddLap={addLap}
      ></SesionList>

    </div>
  );
}

export default App;
