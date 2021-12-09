import React, { useContext } from "react"
import SesionList from "./components/SesionsList"
import Today from "./components/Helpers/Today"
import ActivitiesContext from './store/activities-context'

import "./App.css"


function App() {

  const ctx = useContext(ActivitiesContext);

  return (
    <>
      <Today></Today>

      {ctx.sesionsList[0] && !ctx.sesionsList[0].end ?
        <button className="addSession" onClick={ctx.endSession} >Terminar sesión de estudio</button>
        :
        <button className="addSession" onClick={ctx.addSession} >Iniciar sesión de estudio</button>
      }


      <SesionList
        sesions={ctx.sesionsList}
      ></SesionList>
    </>
  );
}

export default App;
