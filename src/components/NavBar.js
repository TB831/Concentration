import React from "react";

const NavBar = ({ winCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Concentration Game!
        <button className="btn btn-primary btn-sm m-2">New Game</button>
      </a>
    </nav>
  );
};

export default NavBar;
