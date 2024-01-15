import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderSanPham = () => {
    const { listProductProps } = this.props;
    return listProductProps.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          productProps={product}
          getDetailProduct={this.props.getDetailProduct}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
