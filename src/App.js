import Logo from "./Components/Logo";
import UserContext from "./Context.js/context";
import LogIn from "./Pages.js/LogIn";
import { useEffect, useState } from "react";
import Register from "./Pages.js/Register";
import { Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/" Component={LogIn} />
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
