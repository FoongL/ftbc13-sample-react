import React from "react";
import "./counter.css";

export default class Counter extends React.Component {
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

  // using "traditional" If/else statement

  // isEven = () =>{
  //   console.log('am i running?')
  //   if(this.state.count%2===0){
  //     // output something if even
  //     return(<h2>THIS IS EVEN!</h2>)
  //   }else{
  //     // output nothing
  //     return null
  //   }
  // }

  /**
   * "traditional if / else"
   * if(some condition here){
   *   do something if the condition is met
   * } else{
   *  do something else if the IF conditon is not met
   * }
   *
   * Turnary statement
   *
   * someConditionHere? (return something if condition is met) : (return something if the conditoin is NOT met)
   *
   */

  // life cycles

  // componentDidMount() {
  //   // runs when our component first starts
  //   console.log("component did mount");
  // }

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

  mouseLeave = () => {
    console.log("Please don't leave me");
  };

  componentWillUnmount() {
    // runs when our component is shut down
    console.log("component will unmount");
  }

  // access props through this.props
  render() {
    return (
      <div>
        <h1
          className={this.state.color}
          onMouseLeave={() => {
            this.mouseLeave();
          }}
        >
          Hello {this.props.firstName}!
        </h1>
        <br />
        <p>Welcome to my first component</p>
        {/* {this.isEven()} */}
        {this.state.count % 2 === 0 ? <h3>THIS IS EVEN!</h3> : null}
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

        {/* <input
        id='input'
          onFocus={(e) => {
            console.log("Focused on input");
            console.log(e)
          }}
          placeholder="onFocus is triggered when you click this input."
        /> */}
      </div>
    );
  }
}

// export default Counter;
