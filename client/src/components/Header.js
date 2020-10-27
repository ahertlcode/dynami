import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <h1>
              <Link className="title" to="/">
                Dynami
              </Link>
              <br />
              <span className="subtitle is-6">
                Solving Nigeria's power problem, one mini-grid at a time.
              </span>
            </h1>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register">
                    <strong>Sign up</strong>
                  </Link>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                  <Link to="/login">
                    <strong>Log in</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};
