import "../../App.css";
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Stack, TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
    },
    "& label": { color: "white" },
});

function Signup(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [Username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [password1, setpassword1] = useState("");
    const [passcheck, setpasscheck] = useState(true);

    const SubmitHandler = async function () {
        const result = await axios.post('http://localhost:3001/authentication/register', { user_name: Username, position: 2, password: password });
        props.setsignin(true);
    }


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };

    return (
        <div className='loginOuter'>
            <div className='loginalign'>
                <div className="loginDesign">
                    <h3 className="loginDesignh3">Welcome!</h3>
                    <p className="loginDesignp">Enter your username and password to sign up</p>
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
                        <CssTextField
                            label="re-enter password"
                            required
                            type={showPassword1 ? 'text' : 'password'}
                            value={password1}
                            onChange={function (e) {
                                setpassword1(e.target.value);
                                if (!password.startsWith(password1)) {
                                    setpasscheck(false);
                                }
                                else {
                                    setpasscheck(true);
                                }
                                // setinitalPassword(true);
                            }}
                            error={!passcheck ? "Password does not match" : ""}
                            helperText={!passcheck ? "Password does not match" : ""}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword1}
                                        onMouseDown={handleMouseDownPassword1}
                                        sx={
                                            {
                                                color: "white",
                                            }
                                        }
                                        edge="end"
                                    >
                                        {showPassword1 ? <VisibilityOff /> : <Visibility />}
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
                        Sign Up
                    </Button>
                </Stack>
                <div>
                    <pre className="loginDesignp1">Already have an account ?  <span className="loginDesignspan" onClick={props.signUpHandler}>Signin</span></pre>
                </div>
                <div>
                    <p className="loginDesignp3" >@ 2021, Made with ❤️ by FullStack Slayers</p>
                </div>
            </div>
        </div>);
}

export default Signup;