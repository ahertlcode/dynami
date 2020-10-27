import React from "react";
import { Route, BrowserRouter as Router,  Link } from "react-router-dom";
import {Donors} from "../admins/Donors";
import {Vendors} from "../admins/Vendors";
import {Developers} from "../admins/Developers";
import {Projects} from "../admins/Projects";
import {Invoices} from "../admins/Invoices";
import {Approved} from "../admins/Approved";
import {Rejected} from "../admins/Rejected";
import {Assets} from "../admins/Assets";
import Auth from "../services/auth.service";

export const Dashboard = () => {
    return (
      <Router>
        <section className="hero is-fullwidth is-primary is-fullheight">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link to="/dashboard" className="navbar-item">
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
                <Link to="/donors" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-donate" aria-hidden="true"></i>
                  </span>
                  Donors
                </Link>
                <Link to="/vendors" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-store-alt" aria-hidden="true"></i>
                  </span>
                  Vendors
                </Link>
                <Link to="/developers" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-tools" aria-hidden="true"></i>
                  </span>
                  Developers
                </Link>
                <Link to="/projects" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fa fa-industry" aria-hidden="true"></i>
                  </span>
                  Projects
                </Link>
                <Link to="/invoices" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i
                      className="fas fa-file-invoice-dollar"
                      aria-hidden="true"
                    ></i>
                  </span>
                  Invoices
                </Link>
                <Link to="/approvals" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-thumbs-up" aria-hidden="true"></i>
                  </span>
                  Approved
                </Link>
                <Link to="/rejected" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-thumbs-down" aria-hidden="true"></i>
                  </span>
                  Rejected
                </Link>
                <Link to="/assets" className="navbar-item is-hidden-tablet">
                  <span className="icon">
                    <i className="fas fa-briefcase" aria-hidden="true"></i>
                  </span>
                  Assets
                </Link>
              </div>

              <div className="navbar-end">
                <Link to="/profile" className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                  Profile
                </Link>
                <Link onClick={Auth.logout} className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </span>
                  Log Out
                </Link>
              </div>
            </div>
          </nav>
          <div className="columns">
            <aside className="menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile move-right">
              <p className="menu-label is-hidden-touch">Navigation</p>
              <ul className="menu-list">
                <li>
                  <Link to="/donors">
                    <span className="icon">
                      <i className="fas fa-donate" aria-hidden="true"></i>
                    </span>
                    Donors
                  </Link>
                </li>
                <li>
                  <Link to="/vendors">
                    <span className="icon">
                      <i className="fas fa-store-alt" aria-hidden="true"></i>
                    </span>
                    Vendors
                  </Link>
                </li>
                <li>
                  <Link to="/developers">
                    <span className="icon">
                      <i className="fas fa-tools" aria-hidden="true"></i>
                    </span>
                    Developers
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <span className="icon">
                      <i className="fa fa-industry" aria-hidden="true"></i>
                    </span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/invoices">
                    <span className="icon">
                      <i
                        className="fas fa-file-invoice-dollar"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Invoices
                  </Link>
                </li>
                <li>
                  <Link to="/approvals">
                    <span className="icon">
                      <i className="fas fa-thumbs-up" aria-hidden="true"></i>
                    </span>
                    Approved
                  </Link>
                </li>
                <li>
                  <Link to="/rejected">
                    <span className="icon">
                      <i className="fas fa-thumbs-down" aria-hidden="true"></i>
                    </span>
                    Rejected
                  </Link>
                </li>
                <li>
                  <Link to="/assets">
                    <span className="icon">
                      <i className="fas fa-briefcase" aria-hidden="true"></i>
                    </span>
                    Assets
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column is-10">
            <Route exact path="/donors" component={Donors} />
            <Route path="/vendors" component={Vendors} />
            <Route path="/developers" component={Developers} />
            <Route path="/projects" component={Projects} />
            <Route path="/invoices" component={Invoices} />
            <Route path="/approvals" component={Approved} />
            <Route path="/rejected" component={Rejected} />
            <Route path="/assets" component={Assets} />
          </div>

          <div className="hero-foot">&copy;2020 ETHLagos Team-3</div>
        </section>
      </Router>
    );
};
