import React from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import { About } from "./components/About";

function App() {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <Landing />
      <About />
    </div>
  );
}

export default App;
