import React, { useContext } from "react";
import SesionList from "./components/Sesions/SesionsList";
import ActivitiesContext from "./store/activities-context";
import SelectorDay from "./components/UI/SelectorDay/SelectorDay";
import Play from "./components/UI/Play";

import "./App.css";

function App() {
  const ctx = useContext(ActivitiesContext);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <header>
        <nav>
          <SelectorDay></SelectorDay>

          {ctx.sesionsList[0] && !ctx.sesionsList[0].end ? (
            <button className="addSession" onClick={ctx.endSession}>
              {" "}
              <Play size="20" pause={true}></Play>End session
            </button>
          ) : (
            <button className="addSession" onClick={ctx.addSession}>
              <Play size="20"></Play> Start session
            </button>
          )}
        </nav>
        <section className={"HorasHoy"}>
          <span>Today</span>
          <div>
            <span>{ctx.totalHours}</span>hrs
          </div>
        </section>
      </header>

      <SesionList sesions={ctx.sesionsList}></SesionList>
    </>
  );
}

export default App;
