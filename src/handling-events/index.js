import React, { Component } from "react";

export default class HandlingEvents extends Component {
  handlingDemoClick() {
    console.log("handlingDemoClick");
    alert("hello");
  }
  handlingDemoClickParams = (name,age) => {
    console.log("handlingDemoClickParams", name, age);
    alert(`hello ${name} ${age}`);
  };
  render() {
    return (
      <div>
        <h3>*HandlingEvents</h3>
        <button className="btn btn-success" onClick={this.handlingDemoClick}>
          Demo click
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            this.handlingDemoClickParams("Thanh", 18);
          }}
        >
          demo click params
        </button>
      </div>
    );
  }
}
