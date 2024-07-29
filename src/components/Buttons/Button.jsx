import React from "react";

function Button(props) {
  return (
    <div {...props} className={"button " + props.className}>
      Button
    </div>
  );
}

export default Button;
