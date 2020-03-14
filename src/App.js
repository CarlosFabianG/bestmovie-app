import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Input } from "@chakra-ui/core";

function App() {
  return (
    <div className="App">
      < NavBar />
      <header className="App-header">
      <Input placeholder="Basic usage" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      < Footer />
    </div>
  );
}

export default App;
