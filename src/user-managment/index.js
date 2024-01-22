import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,
      userEdit: null,
    };
  }
  _findIndex = (userId) => {
    return this.state.users.findIndex((user) => {
      return user.id === userId;
    });
  };
  handleDeleteUser = (userId) => {
    // const index = this.findIndex(userId);
    // if (index !== -1) {
    //   const newUsers = [...this.state.users];
    //   newUsers.splice(index, 1);
    //   this.setState({
    //     users: newUsers,
    //   });
    // }
    const userNew = [...this.state.users];
    const userFilter = userNew.filter((user) => user.id !== userId);
    this.setState(
      {
        users: userFilter,
      },
      () => {
        console.log(this.state.users);
      }
    );
  };
  handleEditUser = (user) => {
    // console.log(user);
    this.setState({
      userEdit: user,
    });
  };
  userFromModal = (user) => {
    if (user.id) {
      //update
      // tìm vị trí của user trong mảng users
      const index = this._findIndex(user.id);
      // tạo mảng mới
      if (index !== -1) {
        const usersNew = [...this.state.users];
        // cập nhật lại giá trị cho phần tử trong mảng
        usersNew[index] = user;
        // cập nhật lại state
        this.setState(
          {
            users: usersNew,
          },
          () => {
            console.log(this.state.users);
          }
        );
      }
    } else {
      //ADD
      // tạo giá trị cho id
      const date = new Date();
      const usernew = { ...user, id: date.getTime() };
      console.log(usernew);
      // thêm userNew vào mảng users
      const usersNew = [...this.state.users, usernew];
      // cập nhật lại state
      this.setState(
        {
          users: usersNew,
        },
        () => {
          console.log(this.state.users);
        }
      );
    }
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          listUser={this.state.users}
          handleDeleteUser={this.handleDeleteUser}
          handleEditUser={this.handleEditUser}
        />
        <Modal
          userFromModal={this.userFromModal}
          userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

export default Home;
