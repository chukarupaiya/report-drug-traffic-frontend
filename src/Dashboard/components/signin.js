import "../../App.css";
import { useState, useEffect } from 'react';
import { styled } from "@mui/material/styles";
import { Stack, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { FlareSharp, Visibility, VisibilityOff } from '@mui/icons-material';
import axios from "axios";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "blue",
      borderRadius: 20,
    },
    "&:hover fieldset": {
      borderColor: "blue"
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue"
    }
  },
  "& .MuiOutlinedInput-input": {
    color: "white"
    // Use the system font instead of the default Roboto font.
  },
  "& label": { color: "white" },
});

function Signin(props) {


  const [showPassword, setShowPassword] = useState(false);
  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  // const [initalUser, setinitalUser] = useState(false);
  // const [initalPassword, setinitalPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const SubmitHandler = async function () {
    const result = await axios.post(process.env.REACT_APP_BACKEND_URL+'authentication/login', {user_name:Username,password:password});
    props.setPosition(result.data.data.position);
    localStorage.setItem("username",Username)
    localStorage.setItem("password",password)
    localStorage.setItem("userid",result.data.data.id);
    localStorage.setItem("position",result.data.data.position);
    localStorage.setItem("reload",1)
  }

  return (<div className='loginOuter'>
    <div className='loginalign'>
      <div className="loginDesign">
        <h3 className="loginDesignh3">Nice to see you!</h3>
        <p className="loginDesignp">Enter your username and password to sign in</p>
      </div>
      <Stack spacing={8} direction='column'>
        <Stack spacing={4} direction='column'>
          <CssTextField
            label="username"
            required
            value={Username}
            variant="outlined"
            onChange={function (e) {
              setUsername(e.target.value);
              //setinitalUser(true);
            }}
          //error={!Username && initalUser ? "Required":""}
          >
          </CssTextField>
          <CssTextField
            label="password"
            required
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={function (e) {
              setpassword(e.target.value);
              // setinitalPassword(true);
            }}
            // error={!password && initalPassword ? "Required":""}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={
                    {
                      color: "white",
                    }
                  }
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          ></CssTextField>
        </Stack>
        <Button variant="contained"
          sx={
            {
              borderRadius: '20px',
            }

          }
          onClick={SubmitHandler}
        >
          Sign in
        </Button>
      </Stack>
      <div>
        <pre className="loginDesignp1">Don't have an account ?  <span className="loginDesignspan" onClick={props.signUpHandler}>Signup</span></pre>
      </div>
      <div>
        <p className="loginDesignp2">@ 2021, Made with ❤️ by FullStack Slayers</p>
      </div>
    </div>
  </div>);
}
export default Signin;

