import React from "react";
import logo from "./logo.png";
import "./App.css";

import Counter from "./components/counter/counter.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: [
        { id: 1, name: "Sathya" },
        { id: 2, name: "Matthew" },
        { id: 3, name: "Karen" },
        { id: 4, name: "Spencer" },
      ],
    };
  }

  /**
   *
   * {
   * id: unique
   * name: 'Sathya',
   * age: 25,
   *
   * }
   */

  shiftUser = () => {
    console.log("I will pop the array");
    const updatedList = [...this.state.nameList];
    updatedList.shift();

    this.setState({
      nameList: updatedList,
    });
  };

  counterList = () => {
    return this.state.nameList.map((user) => {
      return <Counter firstName={user.name} key={user.id} />;
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button
            onClick={() => {
              this.shiftUser();
            }}
          >
            SHIFT
          </button>
          {/* <Counter firstName='Sathya' colorType='cool'/>
          <Counter firstName='Matthew' colorType = 'cool' />
          <Counter firstName='Karen' colorType='neutral'/> */}

          {this.state.nameList.map((user, index) => {
            return <Counter firstName={user.name} key={user.id} />;
          })}

          {/* If we store the map function OUTSIDE of the render method (look at line 36 for map function) */}
          {/* {this.counterList()} */}
        </header>
      </div>
    );
  }
}

export default App;
