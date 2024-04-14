import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Outlet, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { setProgressBar } from "../features/progressbarFeatures/progressbarFeatures";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const [state, setState] = React.useState({
    open: false,

    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isdisabled, setdisabled] = React.useState(false);
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true, open2: false });
  };

  const handleClose = () => {
    setState({ ...state, open: false, open2: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdisabled(true);
    dispatch(setProgressBar(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        setdisabled(false);
        dispatch(setProgressBar(false));

        console.log(user);
      })
      .catch((error) => {
        handleClick({ vertical: "bottom", horizontal: "left" })();
        dispatch(setProgressBar(false));
        setdisabled(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={isdisabled}>
            Login
          </button>
        </form>
        <div className="signup-link">
          Don't have an account?{" "}
          <a href="#">
            <Link to="/SignupPage">Sign Up</Link>
          </a>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <div>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Login failed! Please try again
          </Alert>
        </div>
      </Snackbar>

      <Outlet />
    </div>
  );
};

export default LoginPage;
