import React, { Component } from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex">
          <Navbar />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Baitap1;
