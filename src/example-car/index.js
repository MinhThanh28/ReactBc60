import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "./images/red-car.jpg",
    };
  }

  changeSrcImage = (urlImage) => {
    console.log(urlImage);
    this.setState({
      imgSrc: urlImage,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>ExampleCar</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={this.state.imgSrc} alt="" />
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-danger"
              onClick={() => {
                this.changeSrcImage("./images/red-car.jpg");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.changeSrcImage("./images/black-car.jpg");
              }}
            >
              Black
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                this.changeSrcImage("./images/silver-car.jpg");
              }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}
