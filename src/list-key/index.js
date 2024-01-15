import React, { Component } from "react";
import data from "./DataFilms.json";
export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, name: "Nguyen Van A", age: 20 },
        { id: 2, name: "Nguyen Van B", age: 21 },
        { id: 3, name: "Nguyen Van C", age: 22 },
      ],
      listMovie: data,
    };
  }
  renderListUser = () => {
    const { listUser } = this.state;
    return listUser.map((user) => {
      return (
        <li key={user.id}>
          {user.id} - {user.name} - {user.age}
        </li>
      );
    });
  };

  renderListMovie = () => {
    const { listMovie } = this.state;
    return (
      <div className="container">
        <div className="row">
          {listMovie.map((movie) => {
            return (
              <div className="col-4" key={movie.maPhim}>
                <div className="card">
                  <img src={movie.hinhAnh} alt={movie.tenPhim} height="350px" />
                  <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <p className="card-text">
                      {movie.moTa}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <h3>* ListKeys</h3>
        <ul>
          {this.renderListUser()}
          {/* {this.state.listUser.map((user) => {
            return (
              <li key={user.id}>
                {user.id} - {user.name} - {user.age}
              </li>
            );
          })} */}
          {this.renderListMovie()}
        </ul>
      </div>
    );
  }
}
