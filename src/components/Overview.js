import React, { Component } from "react";
import App from "../App";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.taskList}</div>
      </div>
    );
  }
}
