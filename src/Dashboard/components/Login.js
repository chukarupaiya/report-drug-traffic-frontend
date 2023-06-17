import Loginpic from './loginpic';
import LoginMain from './loginmain';
import NavBar from './navbar';
import "../../App.css";



function Login(props) {
  return (
    <div className="App">
      <NavBar/>
      <Loginpic/>
      <LoginMain setPosition={props.setPosition}/> 
    </div>
  );
}

export default Login;

