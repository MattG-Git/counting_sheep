import React from "react";

function Nav() {

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./assets/cs_logo.svg" id="logo" alt="Logo"></img>
          Counting Sheep
        </a>
        <ul className="nav">
            {/* ADD CONDITIONAL STATEMENT SO THAT LOG OUT ONLY SHOWS WHEN AUTHENTICATED 
            HAVE TO WAIT FOR AUTHENTICATION VARIABLES TO BE DEFINED  can be found in wk 20 activity 23*/}
            <li className="nav-item">
                <a className="nav-link" href="/login"> Sign In </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login"> Log Out </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
