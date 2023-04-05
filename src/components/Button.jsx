import React from "react";
import "./styles/Buttonnn.css"

const Button = ({ newQuote }) => {
  return (
    <div className="button">
      <button onClick={newQuote}>
      <img className="restart" src="/icon/restart.png" alt="" />
    </button>
    </div>
  );
};

export default Button;
