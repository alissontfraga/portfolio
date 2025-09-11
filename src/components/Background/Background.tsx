import React from "react";
import "./Background.scss";

const Background: React.FC = () => {
  return (
    <div className="starfield">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default Background;