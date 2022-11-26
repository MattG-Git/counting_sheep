import React from "react";

function Nav() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#dashboard">
          Counting Sheep
          <img src="#" alt="Logo"></img>
        </a>
        <ul className="nav">
            {/* ADD CONDITIONAL STATEMENT SO THAT LOG OUT ONLY SHOWS WHEN AUTHENTICATED 
            HAVE TO WAIT FOR AUTHENTICATION VARIABLES TO BE DEFINED  can be found in wk 20 activity 23*/}
            <li className="nav-item">
                <a className="nav-link" href="#login"> Sign In </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#login"> log Out </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
