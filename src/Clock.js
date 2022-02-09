import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}

export default Clock;
