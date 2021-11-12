import React from "react";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";
import { Hero } from "../Hero/Hero";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Projects } from "../projects/Projects";

export const About = () => {
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

      <div className="container">
        <div className="info1">
          <p>
            <Typewriter
              words={[
                "Hello, I am Tushar Prajapati 21 years old pursuing my BE in IT from Terna Engineering College and currently in my last year.I am a web-developer and a person who loves creativity which you can see in my projects ahead.  ",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={30}
            />
          </p>
        </div>
      </div>
      <Projects />
    </>
  );
};
