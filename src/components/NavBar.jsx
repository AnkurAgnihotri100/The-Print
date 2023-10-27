import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; 

function NavBar() {
  return (
    <div style={{ backgroundColor: "#011e29" }}>
      <nav className="navbar navbar-expand-lg">
        <Link className="container navbar-brand text-white" to="/">
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mr-auto mb-2 mb-lg-0">
            <li className="nav-item active" style={{ margin: "0px 10px" }}>
              <Link className="nav-link text-white" to="/Login">
                LogIN
              </Link>
            </li>
            <li className="nav-item active" style={{ margin: "0px 10px" }}>
              <Link className="nav-link text-white" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search news"
            aria-label="Search"
            style={{ margin: "0px 10px" }}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{ margin: "0px 10px" }}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
