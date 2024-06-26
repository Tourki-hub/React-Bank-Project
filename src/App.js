import Logo from "./Components/Logo";
import UserContext from "./Context.js/context";
import LogIn from "./Pages.js/LogIn";
import { useEffect, useState } from "react";
import Register from "./Pages.js/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages.js/Home";
import Transaction from "./Pages.js/Transaction";
import { getToken } from "./api/storage";
import Profile from "./Pages.js/Profile";
import Users from "./Pages.js/Users";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    // تم اضافة صفحتين (home) ,(transaction)
    <UserContext.Provider value={[user, setUser]}>
      <div className="flex flex-col h-[100vh]">
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/" Component={LogIn} />
          <Route path="/register" Component={Register} />
          <Route path="/transaction" Component={Transaction} />
          <Route path="/profile" Component={Profile} />
          <Route path="/users" Component={Users} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
