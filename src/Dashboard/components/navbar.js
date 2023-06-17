import "../../App.css";
import { useState,useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function NavBar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    useEffect(() => {
        if(isNavExpanded){
            var element = document.getElementsByClassName("NavitemsDiv");
            element[0].classList.toggle("NavitemsDivRes");
            element = document.getElementsByClassName("NavitemDiv");
            for (let i = 0; i < element.length; i++) {
                element[i].classList.toggle("NavitemDivRes");
            }
           
        }
        else{
            element = document.getElementsByClassName("NavitemsDiv");
            element[0].classList.toggle("NavitemsDivRes");
            element = document.getElementsByClassName("NavitemDiv");
            for (let i = 0; i < element.length; i++) {
                element[i].classList.toggle("NavitemDivRes");
            }
        }
      }, [isNavExpanded]); 

      useEffect(() => {
        window.addEventListener("resize", () => {setIsNavExpanded(false)});
      })

    return (
    <div className="responsiveNavBar NavOuter">
    <div className="NavInner">
        <span className="NavAlways">Narcotics Control Bureau</span>
        <div className="NavItemMenu">{
            isNavExpanded ? <FaTimes className="NavItemMenuicon" onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>:
            <FaBars className="NavItemMenuicon" onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>}
        </div>
        <div className="NavitemsDiv">
            <div className="NavitemDiv"><span className="NavitemDivSpan">Signin</span>
            </div>
            <div className="NavitemDiv">
                <span className="NavitemDivSpan">about</span>
            </div>
            <div className="NavitemDiv">
                <span className="NavitemDivSpan">Project</span>
            </div>
            {/* <div className="NavitemDiv">
                <span className="NavitemDivSpan">Github</span>
            </div> */}
        </div>
    </div>
</div>
);
}

export default NavBar;