import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Left <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Right <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Right 2 <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
