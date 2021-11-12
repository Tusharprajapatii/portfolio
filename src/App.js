import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./main";
import { About } from "./components/about/About";
import { Project } from "./components/project/Project";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
