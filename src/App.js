import Logo from "./Components/Logo";
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
    <div className="flex flex-col h-[100vh]">
      <Logo />
      <LogIn />
    </div>
  );
}

export default App;
