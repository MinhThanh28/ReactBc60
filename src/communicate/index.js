import React, { Component } from "react";
import Child from "./child";
import ChildFnc from "./childFnc";
export default class Comunicate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Cybersoft",
      age: 18,
    };
  }
  changeUsername = () => {
    this.setState({
      username: "Thanh",
      age: 20,
    });
  };
  handleReset = (username, age) => {
    // nhận data từ component con
    // console.log(username);
    this.setState({
      username,
      age,
    });
  };
  render() {
    const { username, age } = this.state;
    return (
      <div>
        <h3>* Comunicate</h3>
        <h4>Username: {username}</h4>
        <button className="btn btn-success" onClick={this.changeUsername}>
          change username
        </button>
        <Child
          usernameProps={username}
          ageProps={age}
          reserUsername={this.handleReset}
        />
        <ChildFnc usernameProps={username} ageProps={age} />
      </div>
    );
  }
}
