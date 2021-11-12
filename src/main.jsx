import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/projects/Projects";

export const Main = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};
