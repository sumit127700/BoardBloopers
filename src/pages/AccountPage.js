import React, { useState } from "react";

import auth from "../firebase";
import "./css/AccountPage.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile, updatePassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setProgressBar } from "../features/progressbarFeatures/progressbarFeatures";
import { setUsernameId } from "../features/loginFeatures/loginFeatures";
const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.loginData.email);
  const username = useSelector((state) => state.loginData.username);
  const [usernam, setUsernam] = useState("defaultuser");
  const [password, setPassword] = useState("");
  const [userinitials, setUserinitials] = useState("SS");
  const [isdisabled, setdisabled] = React.useState(false);

  const handleUpdate = async () => {
    if (usernam.length < 6 || (password !== "" && password.length < 6)) {
      alert("Username and Password must be at least 6 characters long.");
      return;
    }
    dispatch(setProgressBar(true));
    setdisabled(true);
    const user = auth.currentUser;

    await updateProfile(user, {
      displayName: usernam,
    });

    await updatePassword(user, password)
      .then(() => {
        console.log("Successful");
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(setUsernameId(usernam));

    setdisabled(false);
    dispatch(setProgressBar(false));
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="account-page">
      <div className="account-container">
        <div className="avatar">{userinitials}</div>
        <h1>User Account</h1>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={username}
              onChange={(e) => {
                setUsernam(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="mailclassleft">
              <div>Email</div>
              <div>{email}</div>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="update-button"
            disabled={isdisabled}
            onClick={handleUpdate}
          >
            Update Account
          </button>
          <button className="signout-button" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
