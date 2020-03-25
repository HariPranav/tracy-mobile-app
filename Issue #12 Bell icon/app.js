import React from 'react';
import logo from './logo.svg';
import bell from './bell.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <a
          className="App-link"
          href="http://telegram.me/projecttracy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bell} className="bell-logo" alt="logo" />
          
        </a>
      </header>
    </div>
  );
}

export default App;
