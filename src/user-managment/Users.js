import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderUser = () => {
    const { listUser, handleDeleteUser, handleEditUser } = this.props;
    return listUser.map((user) => {
      return (
        <UserItem
          key={user.id}
          userProp={user}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
