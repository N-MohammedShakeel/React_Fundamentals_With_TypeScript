import React from "react";

const Button = ({ isActive }: { isActive: boolean }) => {
  return (
    <div>
      <button style={{ backgroundColor: isActive ? "green" : "red" }}>
        Click me
      </button>
    </div>
  );
};

export default Button;
