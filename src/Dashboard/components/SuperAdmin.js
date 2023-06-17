import SuperAdminCreate from "./SuperAdminCreate";
import SuperAdminPic from "./SuperAdminpic";
import { Button } from '@mui/material';
import "../../App.css";




function SuperAdmin(){

  const SubmitHandler = function () {
    localStorage.clear();
    alert("You have been Successfully logged out");
    window.location.reload(false);
  }

    return (
        <div className="App superadminlogoutdiv">
        <SuperAdminPic></SuperAdminPic>
        <SuperAdminCreate></SuperAdminCreate>
        <div className="logoutsuperAdmin">
          <Button variant="contained"
              sx={
                  {
                      borderRadius:'20px',
                      height:'45px'
                  }

              }

              onClick  = {SubmitHandler}
              
              >
                   Logout
          </Button>
        </div>
    </div>
  );
}

export default SuperAdmin;