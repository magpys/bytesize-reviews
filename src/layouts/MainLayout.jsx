import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>
            <div className="pt-26">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}