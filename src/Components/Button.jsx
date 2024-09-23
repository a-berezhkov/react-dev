import React from "react";

function Button({titleOfButton, color}) {
  return <button type="button" style={{color: color}}>{titleOfButton}</button>;
}

export default Button;
