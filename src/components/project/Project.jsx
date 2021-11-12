import React from "react";
import styledeck from "../../assets/styledeck.png";
import cableflix from "../../assets/cableflix.png";
import portfolio from "../../assets/portfolio.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./project.css";

export const Project = () => {
  const [messages, setMessages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjOGzljwagIeaF8ukyrYEqJpyUWDHF4bwgQ&usqp=CAU",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKGqCp97g70wVVVQ5J3THj1-Xa-iI7RINuXA&usqp=CAU",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > messages.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, []);
  return (
    <>
      <Link to="/">
        <img className="logo" src={messages[index]} alt="" />
      </Link>
      <div className="cont">
        {" "}
        <div className="titl">React Frontend Projects </div>
        <div className="projects-container">
          <img className="project blue small" src={portfolio} alt="" />

          <a href="https://cableflix.netlify.app/">
            <img className="project white" src={cableflix} alt="" />
          </a>
          <a href="https://styledeck.netlify.app/">
            <img className="project white" src={styledeck} alt="" />
          </a>
        </div>
        <div>ad</div>
      </div>
    </>
  );
};
