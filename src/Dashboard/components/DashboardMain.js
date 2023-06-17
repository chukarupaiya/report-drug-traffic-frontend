import "../../App.css";
import UserComplaintMain from './UserComplaintMain';
import UserDashBoardMain from './UserDashboardMain';
import NavDash from "./navdash";
import { Routes, Route } from "react-router-dom";

function DashBoardMain(){
    return (
        <div className="DashBg">
         <div className="DashBg1">
            <NavDash></NavDash>
         </div>
            <Routes>
                <Route path="/" element={<UserDashBoardMain />} />
                <Route path="complaint" element={<UserComplaintMain/>}></Route>
            </Routes>
        </div>
    );
}

export default DashBoardMain;