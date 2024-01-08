import Carousel from "./carousel";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import List from "./list";
import Wwd from "./wwd";

export default function Baitap3() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Wwd />
          <Contact />
        </div>
        <List />
      </div>
      <Footer />
    </div>
  );
}
