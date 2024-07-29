import React from "react";

function Header() {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  useEffect(() => {
    tg.ready();
  }, []);
  return (
    <div className={"header"}>
      <button onClick={onClose}></button>
      <span className={"username "}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default Header;
