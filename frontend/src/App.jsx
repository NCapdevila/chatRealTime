import { useState } from "react";

import "./App.css";

import AuthPage from "../src/components/AuthPage/index";
import ChatsPage from "../src/components/ChatsPage/index";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;