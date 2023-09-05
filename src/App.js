import React from "react";
import logo from "./logo.png";
import "./App.css";

import Counter from './components/counter/counter.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Counter firstName='Sathya' colorType='cool'/>
          {/* <Counter firstName='Matthew' colorType = 'cool' />
          <Counter firstName='Karen' colorType='neutral'/> */}

        </header>
      </div>
    );
  }
}

export default App;
