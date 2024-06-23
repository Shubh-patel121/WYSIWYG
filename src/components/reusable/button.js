import React from "react";

const Button = ({ title = "X", id, handleClick, btnClass = "remove-btn" }) => {
  return (
    <button className={btnClass} onClick={() => handleClick(id)}>
      {title}
    </button>
  );
};

export default Button;
