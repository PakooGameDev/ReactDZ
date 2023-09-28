import React, { useState } from "react";

function ColorChangeButton() {
  const [isBlackBackground, setIsBlackBackground] = useState<boolean>(false);

  const handleClick = () => {
    setIsBlackBackground(!isBlackBackground);
    document.body.style.backgroundColor = isBlackBackground ? "white" : "black";
  };

  return <button onClick={handleClick}>Change Background Color</button>;
}

export default ColorChangeButton;
