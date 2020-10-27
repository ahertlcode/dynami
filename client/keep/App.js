import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, NavLink, HashRouter } from "react-router-dom";

import "./index.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

var store = require("./store").default;

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
        dispatch(clearMessage());
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    return (
      <Router>
        <div className="App">
          <section className="hero is-fullwidth is-primary is-fullheight">
            <div className="hero-head">
              <div className="container">
                <h1 className="title">Dynami</h1>
                <h2 className="subtitle is-6">
                  Solving Nigeria power problem, one mini-grid at a time.
                </h2>
              </div>
            </div>
            <div className="hero-body">
              <div className="container">
                <div className="columns is-vcentered">
                  <div className="column is-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi obcaecati rerum fugit itaque cum neque voluptatem
                    repudiandae, voluptatibus vero necessitatibus?
                  </div>
                  <div className="column is-8">
                    <figure className="image is-5by3">
                      <img
                        className="myImg"
                        src={"images/Africa_Solar_Farm_Mini-Grid.jpg"}
                      />
                    </figure>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">Donation</p>
                      </header>
                      <div className="card-content">
                        Your can support this project, delivering stable power
                        supply to the many Nigeria societies and communities
                        without a stable power supply by donating to finance
                        sustainable mini-grid power projects.
                      </div>
                      <footer className="card-footer">
                        <a href="/Register" className="card-footer-item">
                          Donate Here.
                        </a>
                      </footer>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">Vendor</p>
                      </header>
                      <div className="card-content">
                        Your can support, delivering stable power supply to the
                        many Nigeria societies and communities without power
                        supply by donating to finance a sustainable mini-grid
                        project.
                      </div>
                      <footer className="card-footer">
                        <a href="/Register" className="card-footer-item">
                          Start Here.
                        </a>
                      </footer>
                    </div>
                  </div>
                  <div className="column">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">Developer</p>
                      </header>
                      <div className="card-content">
                        Your can support, delivering stable power supply to the
                        many Nigeria societies and communities without power
                        supply by donating to finance a sustainable mini-grid
                        project.
                      </div>
                      <footer className="card-footer">
                        <Link
                          exact
                          to={"/Register"}
                          className="card-footer-item"
                        >
                          Start Here.
                        </Link>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-foot">&copy;2020 ETHLagos Team-3</div>
          </section>
        </div>
      </Router>
    );
};

export default AppWrapper;
