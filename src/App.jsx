import React, { useState } from "react";
import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";

function App() {
  const [active, setActive] = useState('default');

  function handleClick(page) {
    setActive(page);
  }

  return (
    <>
      <Header handleClick={handleClick}/>
      <Contents click={active} />
    </>
  );
}

export default App;
