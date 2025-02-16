import React from "react";
import { useTelegram } from "../hooks/useTelegram";
import "./Header.css";

function Header() {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <button onClick={onClose}>Закрити</button>
      <span className={"username"}>{user?.username}</span>
    </div>
  );
}

export default Header;
