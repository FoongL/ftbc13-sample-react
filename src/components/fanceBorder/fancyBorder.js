import React from "react";

export default class FancyBorder extends React.Component {
  render() {
    return (
      <div
        style={{ border: "solid", borderWidth: "5px", borderColor: "white" }}
      >
        {this.props.children}
      </div>
    );
  }
}
