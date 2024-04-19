import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Netflix from "../../static/netflix-logo-png-large.png";
import "./style.css";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        {/* Logo on the left side */}
        <Navbar.Brand href="#home">
          <img
            src={Netflix} // Replace with the path to your logo image
            height="30"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Menu items centered */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Link className="nav-link active text-white" to="/">
              Home
            </Link>
            <Link className="nav-link active text-white" to="/latest">
              Latest
            </Link>
            <Link className="nav-link active text-white" to="/tvshows">
              Tv Shows
            </Link>
            <Link className="nav-link active text-white" to="/movies">
              Movies
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
