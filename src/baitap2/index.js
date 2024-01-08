import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

function Biatap2(){
    return (
        <div>
            <h1>Baitap 2</h1>
            <Header />
            <div className="flex">
                <Navbar />
                <Content />
            </div>
            <Footer />
        </div>
    );
}
export default Biatap2;