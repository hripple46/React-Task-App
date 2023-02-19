import React, { Component } from "react";
import App from "../App";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.taskList.map((str) => {
          return <li key={str.toString()}> {str}</li>;
        })}
      </ul>
    );
  }
}
