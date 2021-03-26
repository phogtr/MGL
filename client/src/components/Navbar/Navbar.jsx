import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setPage, setFilter, setUrlName, pageArray, setRelease, setNameComps }) => {
  const resetState = () => {
    setPage(1);
    setFilter("");
    setUrlName("");
    setRelease(0);
    setNameComps("");
    for (let i = 0; i < 10; i++) {
      pageArray[i] = i + 1;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse hLine" id="navbarToggler">
        <ul className="navbar-nav nav-justified mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/" onClick={resetState}>
              <span className="text-color">Home</span> <span className="sr-only">(current)</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">
              About <span className="sr-only">(current)</span>
            </Link>
          </li> */}
        </ul>
        {/* <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Right <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Login <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
