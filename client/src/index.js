import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from "react-router-dom";
import './index.css';
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

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
        <Route exact path="/" component={Body}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
    </HashRouter>, document.getElementById("root"));