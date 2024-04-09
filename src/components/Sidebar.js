import React from "react";
import "./css/Sidebar.css";
import { Outlet } from "react-router-dom";
import { Sidebarlink } from "./Sidebarlink";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Sofia"
></link>;
const Sidebar = ({
  isOpen,
  toggle,
  isloggedin,
  isSmallScreen,
  setSmallScreen,
}) => {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
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
      onClick={isSmallScreen ? toggle : () => {}}
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
