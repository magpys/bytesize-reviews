import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Outlet} from "react-router";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}