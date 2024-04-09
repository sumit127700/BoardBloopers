import * as React from "react";
import { useEffect } from "react";
import auth from "../firebase";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { onAuthStateChanged } from "firebase/auth";

function Snackbars() {
  let val = 0;
  const [state, setState] = React.useState({
    open: false,
    open2: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open, open2 } = state;
  const handleClick = (newState) => () => {
    setState({ ...newState, open: true, open2: false });
  };

  const handleClose = () => {
    setState({ ...state, open: false, open2: false });
  };
  const handleClickforlogout = (newState) => () => {
    setState({ ...newState, open: false, open2: true });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        handleClick({ vertical: "bottom", horizontal: "left" })();
        // ...
        val = 1;
      } else {
        // User is signed out
        // ...
        if (val == 1)
          handleClickforlogout({ vertical: "bottom", horizontal: "left" })();
        val = 0;
      }
    });
  }, []);
  return (
    <>
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
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            You have successfully logged in!
          </Alert>
        </div>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose}
        key={horizontal + horizontal}
      >
        <div>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            You have successfully logged out!
          </Alert>
        </div>
      </Snackbar>
    </>
  );
}
export default Snackbars;
