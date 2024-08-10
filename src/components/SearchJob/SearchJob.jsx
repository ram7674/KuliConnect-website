import React, { useState } from "react";
import "./SearchJob.css";

import SliderPage from "../SliderPage/SliderPage";
import { InputText } from "primereact/inputtext";
import Footer from "../Footer/Footer";

const SearchJob = () => {
  const [value, setValue] = useState("");

  return (
    <>
      {/* this is header section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 sticky-top" style={{borderBottom: "2px solid #e2e2e2"}}>
        <div className="container">
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
          <SliderPage />
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
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <img src="" alt="profile" className="profile-pic" />
              <span>Name here</span>
            </div>
          </div>
        </div>
      </nav>

      {/* this is body section */}
      <div className="container-fluid bg-light" style={{height: '100vh'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card flex justify-content-center py-5 align-items-center flex-row bg-light border-0">
                <div className="search-input-container">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="search-input"
                    placeholder="Search Jobs..."
                  />
                  <i className="fas fa-search search-icon search-icon-st"></i>
                </div>
              </div>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>

      {/* footer component */}
      <Footer/>

    </>
  );
};

export default SearchJob;