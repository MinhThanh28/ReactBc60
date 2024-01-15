import React, { Component } from "react";

export default class Child extends Component {
  handResetUsername = () => {
    const userNameReset = "Cybersoft";
    const ageReset = 18;
    // console.log(userNameReset);
    this.props.reserUsername(userNameReset, ageReset);
  };

  render() {
    const { usernameProps, ageProps } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={this.handResetUsername} className="btn btn-danger">
          reset username
        </button>
        <h4>
          Username: {usernameProps} - Age: {ageProps}
        </h4>
      </div>
    );
  }
}
