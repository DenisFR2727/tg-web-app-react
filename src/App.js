import { useEffect } from "react";

// const tg = window.Telegram.WebApp;

import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
