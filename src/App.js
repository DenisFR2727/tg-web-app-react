import { useEffect } from "react";

const tg = window.Telegram.WebApp;

import "./App.css";
function App() {
  const onClose = () => {
    tg.close();
  };
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
