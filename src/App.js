// App.js
import React from "react";
import "./App.css";
import Rick from "./components/Rick";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <Rick />
    </div>
  );
}

export default App;
