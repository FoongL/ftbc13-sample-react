import React from "react";
import "./counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      color: this.props.colorType,
    };
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      console.log("stop being so greedy");
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  // life cycles

  componentDidMount() {
    // runs when our component first starts
    console.log("component did mount");
  }

  componentDidUpdate(_prevProps, prevState) {
    // runs when our component is updated
    console.log("component did update");
    // console.log("previous state:", prevState);
    // console.log("current state:", this.state);
    if (this.state.count < prevState.count) {
      // this means our counter went down
      const colorArray = ["danger", "cool", "neutral"];
      const index = Math.floor(Math.random() * 3);
      this.setState({
        color: colorArray[index],
      });
    }
  }

  componentWillUnmount() {
    // runs when our component is shut down
    console.log("component will unmount");
  }

  // access props through this.props
  render() {
    return (
      <div>
        <h1 className={this.state.color}>Hello {this.props.firstName}!</h1>
        <br />
        <p>Welcome to my first component</p>
        <p>{this.state.count}</p>
        <br />
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
