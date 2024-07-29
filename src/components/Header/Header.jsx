import React from "react";
import { useTelegram } from "../hooks/useTelegram";

function Header() {
  const tg = window.Telegram.WebApp;
  const { user, onClose } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={"header"}>
      <button onClick={onClose}></button>
      <span className={"username "}>{user?.username}</span>
    </div>
  );
}

export default Header;
