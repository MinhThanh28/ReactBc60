import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    // this.handlingLogin = this.handlingLogin.bind(this);
    // console.log("constructor");
    this.state = {
      isLogin: false,
      username: "Thành",
    };
  }
  isLogin = false;
  username = "Thành";

  handlingLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log(this.state.isLogin);
      }
    );
  };
  handlingLogout = () => {
    this.setState({
      isLogin: false,
    }, () => {
        console.log(this.state.isLogin);
    });
  };
  renderUI() {
    if (this.state.isLogin) {
      return (
        <>
          <h4>hello {this.state.username}</h4>
          <button className="btn btn-danger" onClick={this.handlingLogout}>
            Logout
          </button>
        </>
      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.handlingLogin}>
          Login
        </button>
      );
    }
    // return (
    //   <div>
    //     <button className="btn btn-success">Login</button>
    //     <h4>hello {this.username}</h4>
    //     <button className="btn btn-danger">Logout</button>
    //   </div>
    // );
  }
  render() {
    // console.log("render");
    return (
      <div>
        <h3># state</h3>
        {this.renderUI()}
      </div>
    );
  }
}
