import { Outlet, useNavigation} from "react-router";
import "../CSS/style.css"
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { DotLoader } from "react-spinners";
const RootLayouts = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location);
    return (
        
            <div>
                <Navbar></Navbar>
                
                <div className="min-h-screen">
                    {
                    isNavigating && <DotLoader></DotLoader>
                    }
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default RootLayouts;