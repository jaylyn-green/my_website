import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Window from "./components/Window";
import Footer from "./components/Footer";

function App() {
  const [activeProject, setActiveProject] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-900 h-screen grid grid-cols-4 overflow-hidden">
      <div className="col-span-1 space-y-4 ">
        <Home setActiveProject={setActiveProject} setSelected={setSelected} />        {/**should've used some state management */}
        <Projects
          setActiveProject={setActiveProject}
          selected={selected}
          setSelected={setSelected}
        />
        <Skills />
      </div>
      <div className="col-span-3 ">
        <Window activeProject={activeProject} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
