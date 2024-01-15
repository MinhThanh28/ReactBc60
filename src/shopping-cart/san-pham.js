import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetailProduct = () => {
    const { productProps, getDetailProduct } = this.props;
    getDetailProduct(productProps);
  };
  render() {
    const { hinhAnh, tenSP } = this.props.productProps;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={this.handleDetailProduct}
            >
              Chi tiết
            </button>
            <button className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
