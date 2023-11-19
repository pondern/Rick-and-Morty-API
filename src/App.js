// App.js
import React from "react";
import "./App.css";
import Rick from "./components/Rick";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <Rick />
      </header>
    </div>
  );
}

export default App;
