import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
    </header>
  )
};

export default NavBar;
