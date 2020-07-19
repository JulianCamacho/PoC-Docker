import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proof of Concept: Docker.
        </p>
        <a
          className="App-link"
          href="https://github.com/JulianCamacho/PoC-Docker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to repo
        </a>
      </header>
    </div>
  );
}

export default App;
