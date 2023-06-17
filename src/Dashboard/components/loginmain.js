import { useState } from 'react';
import Signup from './signup';
import Signin from './signin';

function LoginMain(props) {


    const [signin, setsignin] = useState(true);

    const signUpHandler = function (e){
        e.preventDefault();
        setsignin(!signin);
    }

 if(signin){
        return (<Signin signUpHandler={signUpHandler}  setPosition={props.setPosition}></Signin>);
    }
    else {
      return (<Signup signUpHandler={signUpHandler} setsignin={setsignin}></Signup>);
    }
}


export default LoginMain;