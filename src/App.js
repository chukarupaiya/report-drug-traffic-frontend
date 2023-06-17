import { useEffect, useState } from 'react';
import './App.css';
import AdminDashboardMain from './Dashboard/components/AdminDashboardMain';
import Login from './Dashboard/components/Login';
import SuperAdmin from './Dashboard/components/SuperAdmin';
import { BrowserRouter } from 'react-router-dom';
import DashBoardMain from './Dashboard/components/DashboardMain';



function App() {

  const [position, setPosition] = useState(-1);
  console.log(position);

  useEffect(()=>{

    var pos=localStorage.getItem("position");
    console.log(pos)
      setPosition(pos);
    
  },[]);

  if(position==1){
    return(
      <BrowserRouter>
          <AdminDashboardMain></AdminDashboardMain>
      </BrowserRouter>
   );
  }
  else if(position==2){
    return(
      <BrowserRouter>
          <DashBoardMain>
          </DashBoardMain>
      </BrowserRouter>
    );
  }
  else if(position==0){
    return(
      <SuperAdmin></SuperAdmin>
    );
  }
  else{
    return(
      <>
        <Login setPosition={setPosition}></Login>
      </>
    );
  }
}



export default App;
