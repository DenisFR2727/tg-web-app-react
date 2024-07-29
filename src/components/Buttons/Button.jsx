import React from "react";

import "./Button.css";
function Button(props) {
  return (
    <div {...props} className={"button " + props.className}>
      Button
    </div>
  );
}

export default Button;
