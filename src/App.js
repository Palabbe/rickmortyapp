import React, { useState } from "react";
import './App.css';
import CharsList from "./components/CharsList";

function App() {
  
const [active, setActive] = useState(false)

const handleChange = () => {
  setActive(!active)
}
  
  return (
    <div className="App">
     <CharsList
     handleChange={handleChange}
     active={active}
     />
    </div>
  );
}

export default App;
