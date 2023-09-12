import React from "react";
import Button from "../button/button";

export default class JointCounter extends React.Component {
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

      const callback = () =>{
        console.log('inside callback:', this.state.count)
      }        
      this.setState(
        {
          count: this.state.count - 1,
        },
        callback
        // () => {
        //   // this will only execute AFTER state is executed
        //   console.log("inside callback:", this.state.count);
        // }
      );

      console.log("outside callback:", this.state.count);
    }
  };

  mouseLeave = () => {
    console.log("Please don't leave me");
  };

  // access props through this.props
  render() {
    return (
      <div>
        <h1>Hello {this.props.firstName}!</h1>
        <br />
        <p>Welcome to my joint counter</p>
        <p>State Count: {this.state.count}</p>
        <p>Joint Count: {this.props.jointCount}</p>
        <br />
        <p>State buttons: </p>
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

        <p>Joint Buttons: </p>
        {/* <button
          onClick={() => {
            this.props.increment();
          }}
        >
          +
        </button> */}
        <Button icon="+" function={this.props.increment} />
        <button
          onClick={() => {
            this.props.decrement();
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
