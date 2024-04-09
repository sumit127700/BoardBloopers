import React from "react";
import { Link } from "react-router-dom";

export function Sidebarlink(props) {
  return (
    <Link
      to={props.link}
      style={{
        color: "inherit",
        textDecoration: "inherit",
        height: "inherit",
        width: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.content}
    </Link>
  );
}
