import { useEffect } from "react";
import { Routes, Route, Form } from "react-router-dom";
import { useTelegram } from "./components/hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

import "./App.css";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
      {/* <button onClick={onToggleButton}>toggle</button> */}
    </div>
  );
}

export default App;
