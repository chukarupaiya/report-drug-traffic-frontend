import "../../App.css";
import UserDisplay from "./UserDisplay";
import Example from "./GlobeExample";


function UserDashBoardMain(){
    return (
        <>
        <div className="DashBg2">
           <UserDisplay initial={1}></UserDisplay>
        </div>
        <div className="threeGlobe">
            <Example></Example>
        </div>
        </>
        
    );
}

export default UserDashBoardMain;