import "../../App.css";
import NavDash1 from "./navdash1";
import Example from "./GlobeExample";
import AdminDisplay from "./AdminDisplay";
import { Routes, Route } from "react-router-dom";
import Feedpage from "./feedPage";

function AdminDashboardMain(){
    return (
    <div className="DashBg">
        <div className="DashBg1">
            <NavDash1></NavDash1>
        </div>
        <div className="DashBg2">
            <Routes>
                <Route path="/" element={<AdminDisplay />} />
                <Route path="feeds" element={<Feedpage/>} />
            </Routes>
        </div>
        <div className="threeGlobe">
            <Example></Example>
        </div>
    </div>
    );
}

export default AdminDashboardMain;