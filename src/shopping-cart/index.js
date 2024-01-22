import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";
export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      productDetail: data[0],
      carts: [],
    };
  }
  // nhận data từ component con
  handleDetail = (product) => {
    // console.log("product", product);
    this.setState({
      productDetail: product,
    });
  };
  _findIndex = (maSP) =>
    this.state.carts.findIndex((product) => product.maSP === maSP);

  handleAddProductToCart = (product) => {
    const productCart = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      donGia: product.giaBan,
      soLuong: 1,
    };
    //clone lại mảng carts
    const cartsNew = [...this.state.carts];
    // tìm vị trí của sản phẩm trong mảng
    const index = this._findIndex(productCart.maSP);
    if (index !== -1) {
      // tìm thấy tăng số lượng lên 1
      cartsNew[index].soLuong += 1;
    } else {
      // không tìm thấy thì thêm sản phẩm vào mảng
      cartsNew.push(productCart);
    }
    this.setState(
      {
        carts: cartsNew,
      },
      () => {
        console.log(this.state.carts);
      }
    );
  };
  handleUpdateQuantity = (maSP, isPlus) => {
    console.log(maSP, isPlus);
    const cartsNew = [...this.state.carts];
    const index = this._findIndex(maSP);
    if (index !== -1) {
      // kiểm tra tăng hay giảm số lượng
      if (isPlus) {
        cartsNew[index].soLuong += 1;
      } else {
        if (cartsNew[index].soLuong > 1) {
          cartsNew[index].soLuong -= 1;
        }
      }
    }
    this.setState({
      carts: cartsNew,
    });
  };
  handleDeleteProduct = (maSP) => {
    console.log(maSP);
    // clone lại mảng carts
    const cartsNew = [...this.state.carts];
    //const index = this._findIndex(maSP);
    // if (index !== -1) {
    //   cartsNew.splice(index, 1);
    // }
    // loại bỏ sản phẩm có mã sản phẩm trùng với mã sản phẩm được chọn, trả lại mảng mới sau khi filter
    const cartFilter = cartsNew.filter((product) => {
      return product.maSP !== maSP;
    });
    // set lại state
    this.setState({
      carts: cartFilter,
    });
  };
  totalCart = () => {
    return this.state.carts.reduce((total, product) => {
      return (total += product.soLuong);
    }, 0);
  };
  render() {
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalCart()})
          </button>
        </div>
        <DanhSachSanPham
          listProductProps={this.state.products}
          getDetailProduct={this.handleDetail}
          addProductToCart={this.handleAddProductToCart}
        />
        <Modal
          carts={this.state.carts}
          updateQuantity={this.handleUpdateQuantity}
          deleteProduct={this.handleDeleteProduct}
        />
        <div className="row">
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src={this.state.productDetail.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.state.productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.state.productDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
