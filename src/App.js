import React, { Component } from "react";
import Overview from "./components/Overview";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      tasks: [],
    };
    this.readValue = this.readValue.bind(this);
  }
  readValue = (e) => {
    this.setState({
      task: e.target.value,
    });
    console.log(this.state.task);
  };

  addTask = () => {
    this.setState({
      tasks: this.state.tasks.concat([this.state.task]),
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.readValue}
          name="task"
          type="text"
          value={this.state.task}
        ></input>
        <button onClick={this.addTask} type="submit"></button>
        <Overview taskList={this.state.tasks} />
      </div>
    );
  }
}
