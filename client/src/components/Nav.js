import React from "react";
import '../styles/style.css';

function Nav() {

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./assets/cs_logo_2.svg" id="logo" alt="Logo"></img>
          Counting Sheep
        </a>
        <ul className="nav">
            {/* ADD CONDITIONAL STATEMENT SO THAT LOG OUT ONLY SHOWS WHEN AUTHENTICATED 
            HAVE TO WAIT FOR AUTHENTICATION VARIABLES TO BE DEFINED  can be found in wk 20 activity 23*/}
            <li className="nav-item">
                <a className="btn btn-warning m-2" href="/login"> Sign In </a>
            </li>
            <li className="nav-item">
                <a className="btn btn-warning m-2" href="/login"> Log Out </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
