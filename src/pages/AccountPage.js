import React, { useState } from "react";

import auth from "../firebase";
import "./css/AccountPage.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile, updatePassword } from "firebase/auth";
const AccountPage = ({ setprogressbar, setUsername, username, email }) => {
  const navigate = useNavigate();

  const [usernam, setUsernam] = useState("defaultuser");
  const [password, setPassword] = useState("");
  const [userinitials, setUserinitials] = useState("SS");
  const [isdisabled, setdisabled] = React.useState(false);

  const handleUpdate = async () => {
    setprogressbar(true);
    setdisabled(true);
    const user = auth.currentUser;
    if (usernam !== null)
      await updateProfile(user, {
        displayName: usernam,
      });
    if (password !== "")
      await updatePassword(user, password)
        .then(() => {
          console.log("Successful");
        })
        .catch((error) => {
          console.log(error);
        });
    if (usernam !== "");
    setUsername(usernam);

    setdisabled(false);
    setprogressbar(false);
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
