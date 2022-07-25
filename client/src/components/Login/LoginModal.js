import { Box, Button, Dialog, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import LoginImg from '../../Assets/images/loginForm.png'
import { DataContext } from '../../ContextApi/DataProvider';
import { authenticateLogin, authenticateSignup } from '../../Service/API';

const LoginModal = ({ open, setOpen}) => {
  const accountInitialValues = {
    login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
      view: 'signup',
      heading: "Looks like you're new here",
      subHeading: 'Sign Up with your Mobile number to get started'
    }
  }
  const loginInitialValues = {
    username: "",
    password: "",
  };

  const signupInitialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(signup);
  };
  const signupUser = async () => {
    let res = await authenticateSignup(signup);
    if (!res) return;
    console.log(res);
    handleClose();
    setAccount(signup.username);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      setAccount(login.username);
    }
  };
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    showError(false)
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            background: "#321575",
            height: "100%",
            border: "5px",
            width: "40%",
            color: "rgb(249 250 251)",
            overflow: "hidden",
          }}
        >
          <Typography sx={{ padding: "10%" }} variant="h5">
            {account.heading}
          </Typography>
          <Typography sx={{ padding: "10%" }}>{account.subHeading}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyItem: "center",
              justifyContent: "center",
            }}
          >
            <img src={LoginImg} width="70%" height="200px" alt="log" />
          </Box>
        </Box>
        {account.view === "login" ? (
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              padding: "25px 35px",
              flex: 1,
            }}
          >
            <TextField
              marginTop="20px"
              onBlur={(e) => onValueChange(e)}
              label="Enter Your Username"
              variant="standard"
              name="username"
            />
              {error && <Typography variant='body2' color="red">Please enter valid username or password</Typography>}
            <TextField
              marginTop="20px"
              label="Enter Password"
              variant="standard"
              name="password"
              onBlur={(e) => onValueChange(e)}
            />
            <Typography marginTop="20px" marginBottom="20px" variant="caption">
              By continuing, you agree to General Shop Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              marginTop="20px"
              onClick={() => loginUser()}
              style={{
                color: "#fff",
                background: "#8d0b93",
                hover: "none",
                textTransform: "none",
              }}
            >
              Login
            </Button>
            <Typography
              variant="body"
              marginTop="10px"
              marginBottom="10px"
              textAlign="center"
            >
              OR
            </Typography>
            <Button
              marginTop="20px"
              style={{
                color: "#321575",
                boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
                background: "#fff",
                textTransform: "none",
              }}
            >
              Request OTP
            </Button>
            <Typography
              cursor="pointer"
              marginTop="20px"
              textAlign="center"
              onClick={() => toggleSignup()}
              color="#321575"
              variant="caption"
            >
              New to General Shop? Create an account
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              padding: "25px 35px",
              flex: 1,
            }}
          >
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="firstName"
              label="Enter First Name"
              variant="standard"
            />
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="lastName"
              label="Enter Last Name"
              variant="standard"
            />
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
              variant="standard"
            />
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
              variant="standard"
            />
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
              variant="standard"
            />
            <TextField
              marginTop="20px"
              onBlur={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone Number"
              variant="standard"
            />
            <Button
              onClick={() => signupUser()}
              style={{
                color: "#fff",
                marginTop: "20px",
                background: "#8d0b93",
                textTransform: "none",
              }}
            >
              Continue
            </Button>
            {/* <Typography style={{cursor:"pointer", marginTop:'20px', textAlign: "center", color:"#321575"}} variant="caption">New to General Shop? Create an account</Typography> */}
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default LoginModal;