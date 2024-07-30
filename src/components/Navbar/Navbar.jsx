import React from "react";
import { Link } from "react-router-dom";

const UserSign = [
  {
    name: "Log In",
    path: "/login"
  },
  {
    name: "Sign up",
    path: "/signup"
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KuliConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page" href="#section1">
                  Home
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page" href="#section2">
                  About Us
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page" href="#section3">
                  Job Listings
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page" href="#section4">
                  Dashboard
                </a>
              </li>
            </ul>
            <form className="d-flex">
              {
                UserSign.map((item, index) => {
                  return (
                    <Link to={item.path}>
                      <button
                        key={index}
                        className="btn text-white font-bold me-4"
                        type="submit"
                        style={{ backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}
                      >
                        {item.name}
                      </button>
                    </Link>
                  );
                })
              }
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;