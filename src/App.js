import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };
  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
