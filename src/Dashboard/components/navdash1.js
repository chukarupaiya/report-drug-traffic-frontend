import "../../App.css";
import { RiShieldStarFill } from 'react-icons/ri';
import { RiDashboardFill } from 'react-icons/ri';
import { AiFillFileAdd } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NavDash1(){
    const [logout,setlogout] = useState(0)
    const navigate = useNavigate();


    const SubmitHandler = () =>{
        localStorage.clear();
        setlogout(1);
        alert("You have been Successfully logged out");
        navigate('/')
        window.location.reload(false);
    }

    return (
        <>
    <div className="NavDash">
        <div className="NavDashicon1div">
            <RiShieldStarFill className="NavDashicon1"></RiShieldStarFill>
        </div>
        <nav >
            <NavLink to="/">
                <div className="NavDashicon2div">
                    <RiDashboardFill className="NavDashicon2 navicon"></RiDashboardFill>
                    <p className="NavDashp">Dashboard</p>
                </div>
            </NavLink>
            <NavLink to="/feeds">
                <div className="NavDashicon3div">
                    <AiFillFileAdd className="NavDashicon3 navicon"></AiFillFileAdd>
                    <p className="NavDashp">Feeds</p>
                </div>
            </NavLink>
        </nav>
        <div className="NavDashicon4div" onClick={SubmitHandler}>
            <MdLogout className="NavDashicon3"></MdLogout>
            <p className="NavDashp">Logout</p>
        </div>
    </div>
   </>
    );
}

export default NavDash1;