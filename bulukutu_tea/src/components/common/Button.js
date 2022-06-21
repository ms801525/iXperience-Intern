import React from "react";

import { useNavigate } from "react-router-dom";

export default function Button({ children, size, width, page }) {
  const navigate = useNavigate();

  function navToPage() {
    navigate(page);
  }

  return (
    <button
      className={"btn btn-outline-dark m-1 " + size + " " + width}
      style={{ backgroundColor: "#B2755E", fontSize: "large" }}
      onClick={navToPage}
    >
      {children}
    </button>
  );
}
