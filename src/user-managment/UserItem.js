import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { userProp, handleDeleteUser, handleEditUser } = this.props;
    return (
      <tr>
        <td>{userProp.fullname}</td>
        <td>{userProp.username}</td>
        <td>{userProp.email}</td>
        <td>{userProp.phoneNumber}</td>
        <td>{userProp.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              handleEditUser(userProp);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              handleDeleteUser(userProp.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
