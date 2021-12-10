import React, { useContext } from "react"
import SesionList from "./components/SesionsList"
import ActivitiesContext from './store/activities-context'
import SelectorDay from "./components/SelectorDay"


import "./App.css"


function App() {

  const ctx = useContext(ActivitiesContext);

  return (
    <>
      <header>

        <SelectorDay></SelectorDay>

        {ctx.sesionsList[0] && !ctx.sesionsList[0].end ?
          <button className="addSession" onClick={ctx.endSession} >Terminar sesión de estudio</button>
          :
          <button className="addSession" onClick={ctx.addSession} >Iniciar sesión de estudio</button>
        }
        
      </header>


      <SesionList
        sesions={ctx.sesionsList}
      ></SesionList>
    </>
  );
}

export default App;
