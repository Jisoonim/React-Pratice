import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloBox from './components/HelloBox';

function App() {

const showName = (value) => {
  alert("Hello:" + showName)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloBox></HelloBox>
        {/* <Hello name={`Hong`} fn = {showName}></Hello>
        <Hello name={`Kim`} fn = {showName}></Hello> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
