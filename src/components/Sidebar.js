import React, { useEffect, useState } from "react";
import "./css/Sidebar.css";
import { Outlet } from "react-router-dom";
import { Sidebarlink } from "./Sidebarlink";
import { useSelector, useDispatch, useStore } from "react-redux";
import {
  toggle,
  setSmallScreen,
} from "../features/sidebarFeatures/sidebarFeatures";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Sofia"
></link>;
const Sidebar = () => {
  const isloggedin = useSelector((state) => state.loginData.isLoggedIn);
  const isOpen = useSelector((state) => state.sidebarData.isOpen);
  const dispatch = useDispatch();
  const isSmallScreen = useSelector((state) => state.sidebarData.isSmallScreen);
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      dispatch(setSmallScreen(true));
    } else {
      dispatch(setSmallScreen(false));
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 768px)");

  // Call listener function at run time
  myFunction(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    myFunction(x);
  });
  return (
    <div
      className={isOpen ? "sidebar open" : "sidebar"}
      onClick={
        isSmallScreen
          ? () => {
              dispatch(toggle());
            }
          : () => {}
      }
    >
      <div className="account-header">
        <div className="avatar-sidebar">SS</div>
      </div>
      <ul>
        <li>
          <Sidebarlink link="/" content="Home" />
        </li>
        <li>
          <Sidebarlink link="/Botpage" content="Bots" />
        </li>
        <li>
          {isloggedin ? (
            <Sidebarlink link="/AccountPage" content="Account" />
          ) : (
            <Sidebarlink link="/LoginPage" content="Login" />
          )}
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
