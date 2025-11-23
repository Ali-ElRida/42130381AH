import React from "react";

function Button({ label, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition bg-blue-600 text-white hover:bg-blue-700 ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
