import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Button2({ children, size, width, page, color }) {
  const navigate = useNavigate();
  const [isHovering, setHovering] = useState(false);

  function navToPage() {
    navigate(page);
  }

  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
  }

  return (
    <button
      className={"btn m-1 " + size + " " + width}
      style={{ backgroundColor: "white", fontSize: "x-large", color: isHovering ? 'black' : '#779730'}}
      onClick={navToPage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
