
import { useState } from "react";
import { AppRouter } from "./AppRouter";
import UserContext  from "./context/UserContext"
function App() {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser}}>
      <AppRouter></AppRouter>
    </UserContext.Provider>
  );
}

export default App;
