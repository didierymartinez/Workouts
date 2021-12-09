import React, {useState, useEffect} from "react";

const ActivitiesContext = React.createContext({
    sesionsList: [],
    addSession: () => {},
    endSession: () => {},
    addLap: () => {}
});


const tzoffset = (new Date()).getTimezoneOffset() * 60000;
const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
const date = localISOTime.split('T')[0].replaceAll('-', '');
const KEY_LOCASTORAGE = 'activities_' + date

export const ActivitiesContextProvider = (props) => {

    const [sesionsList, setSesionsList] = useState([]);
    
    useEffect(() => {
        const sesions = JSON.parse(localStorage.getItem(KEY_LOCASTORAGE)) || [];
        setSesionsList(sesions);
    }, [])

    useEffect(() => {
      if (sesionsList.length === 0) {
        return
      }
      localStorage.setItem(KEY_LOCASTORAGE, JSON.stringify(sesionsList))
    }, [sesionsList])
  
    const addSession = () => {
  
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
        if (newMod[0].laps.length === 0) {
          newMod[0].start = new Date().toISOString();
          newMod[0].end = undefined;
        } else {
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
        <ActivitiesContext.Provider value={{
            sesionsList,
            addSession,
            endSession,
            addLap
        }}> {props.children} </ActivitiesContext.Provider>
    );
}

export default ActivitiesContext;