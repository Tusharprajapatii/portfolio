import React, { useState, useEffect } from "react";
import "./Hero.css";
import "../../assets/logo1.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export const Hero = () => {
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
      <div className="hero">
        <div className="info">
          <h2>I AM TUSHAR,</h2>
          <h1 className="type" style={{ color: `maroon`, fontSize: `3.5rem` }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["CREATIVE", "ENTHUSIAST", "REACT DEVELOPER"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1200}
            />
          </h1>
        </div>
        <div className="image"></div>
      </div>
    </>
  );
};
