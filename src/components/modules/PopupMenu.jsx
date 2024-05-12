import { useState } from "react";

function PopupMenu({ children, button, buttonClass, handler }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
    handler();
  };

  return (
    <div>
      <button onClick={handleVisibility} className={buttonClass}>
        {button}
      </button>
      {isVisible && { children }}
    </div>
  );
}

export default PopupMenu;
