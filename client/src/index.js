import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from "react-router-dom";
import './index.css';
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import  Login  from "./components/Login";
import { Dashboard } from "./components/Dashboard";

const Body = () => {
    return (
        <section class="hero is-fullwidth is-primary is-fullheight">
            <Header />
            <Content />
            <Footer />
        </section>
    );
}

ReactDOM.render(
    <HashRouter>
        <Route exact path="/" component={Body} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    </HashRouter>,
  document.getElementById("root")
);