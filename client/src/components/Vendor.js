import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Projects } from "../vendors/Projects";
import { Invoices } from "../vendors/Invoices";


export const Vendor = () => {
    return (
      <Router>
        <section className="hero is-fullwidth is-primary is-fullheight">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link to="/vendor" className="navbar-item">
                <h1 className="title is-1">Dynami</h1>
              </Link>
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
              <div className="navbar-start">
                <Link to="/projects" className="navbar-item is-hidden-tablet" href="#">
                  <span className="icon">
                    <i className="fa fa-industry" aria-hidden="true"></i>
                  </span>
                  Projects
                </Link>
                <Link to="/invoices" className="navbar-item is-hidden-tablet" href="#">
                  <span className="icon">
                    <i
                      className="fas fa-file-invoice-dollar"
                      aria-hidden="true"
                    ></i>
                  </span>
                  Invoices
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/profile" className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                  Profile
                </Link>
                <Link to="/logout" className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </span>
                  Log Out
                </Link>
              </div>
            </div>
          </nav>
          <div className="columns">
            <aside className="menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
              <p className="menu-label is-hidden-touch">Navigation</p>
              <ul className="menu-list">
                <li>
                  <Link to="/projects" href="#">
                    <span className="icon">
                      <i className="fa fa-industry" aria-hidden="true"></i>
                    </span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/invoices" href="#" className="">
                    <span className="icon">
                      <i
                        className="fas fa-file-invoice-dollar"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Invoices
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="column">
            <Route path="/projects" component={Projects} />
            <Route path="/invoices" component={Invoices} />
          </div>
          <div className="hero-foot">&copy;2020 ETHLagos Team-3</div>
        </section>
      </Router>
    );
}