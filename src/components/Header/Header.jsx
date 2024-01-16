import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
// import Netflix from "../../static/Netflix-logo-red-black-png.png"
import Netflix from "../../static/netflix-logo-png-large.png"
// import { IoSearchSharp } from "react-icons/io5";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-back">
                <div className="container">
                        <img src={Netflix} className='logo-img' alt='logo'/>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item header-line">
                                <Link className="nav-link active text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active text-white" to="/tvshows">TV Shows</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active text-white" to="/movies">Movies</Link>
                            </li>
                            <li className="nav-item header-line">
                                <Link className="nav-link active text-white" to="/latest">Latest</Link>
                            </li>
                            {/* Add more items as needed */}
                        </ul>
                    </div>
                    <div>
                      <input type="text" className="form-control mr-sm-2" id="searchInput" placeholder="Search"/>                    
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Header
