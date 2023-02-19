import React, { Component } from "react";
import Overview from "./components/Overview";
//import uniqid from "uniqid";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: "",
      },
      tasks: [],
    };
    this.readValue = this.readValue.bind(this);
  }
  readValue = (e) => {
    console.log(e.target);
    this.setState({
      task: { text: e.target.value },
    });
    console.log(this.state.task.text);
  };

  addTask = () => {
    this.setState({
      tasks: this.state.tasks.concat([this.state.task.text]),
      task: {
        text: "",
      },
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.readValue}
          name="task"
          type="text"
          value={this.state.task.text}
        ></input>
        <button onClick={this.addTask} type="submit"></button>
        <Overview taskList={this.state.tasks} />
      </div>
    );
  }
}
