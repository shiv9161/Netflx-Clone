import React from "react";
import { Link } from "react-router-dom";
import Netflix from "../../static/netflix-logo-png-large.png";
import "./style.css";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={Netflix} alt="Logo" className="img-fluid netflix-logo" />
        </a>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/latest" className="nav-link">
                Latest
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tvshows" className="nav-link">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Moives
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
