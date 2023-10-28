import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css"; // Make sure the path is correct

function HeaderSection() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav className="navbar navbar-expand-lg">
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-primary"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-secondary"
                to="/general"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
              >
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-success"
                to="/business"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-danger"
                to="/entertainment"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                  backgroundColor: "purple",
                }}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-warning"
                to="/health"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-info"
                to="/science"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-danger"
                to="/sports"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                  backgroundColor: "green",
                }}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-white btn btn-danger"
                to="/technology"
                style={{
                  margin: "0px 5px",
                  borderRadius: "25px",
                  padding: "8px 25px",
                }}
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderSection;
