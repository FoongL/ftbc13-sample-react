import React from "react";
import logo from "./logo.png";
import "./App.css";

import Counter from "./components/counter/counter.js";
import JointCounter from "./components/jointCounter/jointCounter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameList: [
        { id: 1, name: "Foong" },
        { id: 2, name: "sam" },
      ],
      jointCount: 0,
      firstName: "",
      lastName: "",
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

  handleChange = (e) => {
    if (e.target.id === "firstName") {
      this.setState({ firstName: e.target.value });
    } else if (e.target.id === "lastName") {
      this.setState({ lastName: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const name = `${this.state.firstName} ${this.state.lastName}`;

    const data = { id: this.state.nameList.length + 1, name };

    this.setState({
      nameList: [...this.state.nameList, data],
      firstName: "",
      lastName: "",
    });
  };

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  increment = () => {
    this.setState({
      jointCount: this.state.jointCount + 1,
    });
  };

  decrement = () => {
    this.setState({
      jointCount: this.state.jointCount - 1,
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
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <label>
              First Name:
              <br />
              <input
                id="firstName"
                type="text"
                value={this.state.firstName}
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
            </label>
            <br />
            <label>
              Last Name:
              <br />
              <input
                id="lastName"
                type="text"
                value={this.state.lastName}
                onChange={(event) => {
                  this.handleChange(event);
                }}
              />
            </label>
            <br />
            {/* <input type='datetime-local'/>
            <input type='password'/> */}
            <input type="submit" />
          </form>

          <button
            style={{ marginTop: "15px" }}
            // onClick={() => {
            //   this.shiftUser();
            // }}
            // onClick={()=>{
            //   this.shiftUser()
            // }}
            onClick={this.shiftUser}
          >
            SHIFT
          </button>
          {/* <Counter firstName='Sathya' colorType='cool'/>
          <Counter firstName='Matthew' colorType = 'cool' />
          <Counter firstName='Karen' colorType='neutral'/> */}

          {this.state.nameList.map((user, index) => {
            return (
              <JointCounter
                firstName={user.name}
                key={user.id}
                jointCount={this.state.jointCount}
                increment = {this.increment}
                decrement = {this.decrement}
              />
            );
          })}

          {/* If we store the map function OUTSIDE of the render method (look at line 36 for map function) */}
          {/* {this.counterList()} */}
        </header>
      </div>
    );
  }
}

export default App;
