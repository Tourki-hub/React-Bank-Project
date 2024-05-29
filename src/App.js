import Logo from "./Components/Logo";
import UserContext from "./Context.js/context";
import LogIn from "./Pages.js/LogIn";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="flex flex-col h-[100vh]">
        <Logo />
        <LogIn />
      </div>
    </UserContext.Provider>
  );
}

export default App;
