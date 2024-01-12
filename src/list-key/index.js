import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, name: "Nguyen Van A", age: 20 },
        { id: 2, name: "Nguyen Van B", age: 21 },
        { id: 3, name: "Nguyen Van C", age: 22 },
      ],
    };
  }
  renderListUser = () => {
    const {listUser} = this.state;
    return listUser.map((user) => {
      return (
        <li key={user.id}>
          {user.id} - {user.name} - {user.age}
        </li>
      );
    });
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
        </ul>
      </div>
    );
  }
}
