import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Netflix from "../../static/netflix-logo-png-large.png";
import "./style.css";

const MyNavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
              <img
                src={Netflix}
                alt="Netflix Logo"
                style={{ width: "100px", marginLeft: "15px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav style={{ marginRight: "15px" }}>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/latest">
                  Latest
                </Nav.Link>
                <Nav.Link as={Link} to="/tvshows">
                  Tv Shows
                </Nav.Link>
                <Nav.Link as={Link} to="/movies">
                  Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/addform">
                  Add Data
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
