import React from "react";

export default function Navbar({ setIsOpen, isOpen }) {
  return (
    <div style={{ width: "100vw", height: 40, backgroundColor: "aqua" }}>
      Navbar
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        kapat aç
      </button>
    </div>
  );
}
