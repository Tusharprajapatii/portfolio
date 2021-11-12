import React from "react";
import "./Projects.css";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import cloud4 from "../../assets/cloud4.png";
import cloud5 from "../../assets/cloud5.png";

export const Projects = () => {
  return (
    <div className="clouds">
      <img src={cloud1} className="cloud1" alt="cloud" />
      <img src={cloud3} className="cloud2" alt="cloud" />
      <img src={cloud2} className="cloud3" alt="cloud" />
      <img src={cloud4} className="cloud4" alt="cloud" />

      <img src={cloud5} className="cloud5" alt="cloud" />
    </div>
  );
};
