import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    console.log(form.task.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task Input: <input name="task"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
