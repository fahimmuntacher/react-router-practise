import { Outlet } from "react-router";
import "../CSS/style.css"
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
const RootLayouts = () => {
    return (
            <div>
                <Navbar></Navbar>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default RootLayouts;