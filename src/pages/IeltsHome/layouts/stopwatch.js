import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    // // this.getMinutes(this)
    // console.log(this.props.secondsElapsed);
    this.startTimer();
  }

  getMilliseconds = function () {
    return ("0" + this.state.secondsElapsed * 100).slice(-2);
  };

  getSeconds = function () {
    return ("0" + parseInt(this.state.secondsElapsed % 60)).slice(-2);
  };
  getMinutes = function () {
    return ("0" + Math.floor(this.state.secondsElapsed / 60)).slice(-2);
  };

  startTimer = () => {
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 0.01,
      });
    }, 10);
  };
  resetTimer = () => {
    this.setState({
      secondsElapsed: 0,
    });
  };
  stopTimer = () => {
    clearInterval(this.incrementer);
  };
  render() {
    return (
      <div style={{ textAlign: "right", paddingRight: "12px" }}>
        <h4>
          {this.getMinutes()}:{this.getSeconds()}
        </h4>
      </div>
    );
  }
}

export default Stopwatch;
