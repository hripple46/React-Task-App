import React, { Component } from "react";

export class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.array}</h1>;
  }
}
