import React from "react";
import "./css/Navbar.css";

const Navbar = ({ isOpen, toggle, username, isloggedin }) => {
  return (
    <div className={isOpen ? "navbar" : "navbar open"}>
      <div className="left-heading">
        <button onClick={toggle}>Menu</button>
        <h1>BoardBloopers</h1>
      </div>
      {isloggedin ? (
        <div className="right-heading">
          <h1>{username}</h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
