import React from "react";
import { Redirect, Link } from "react-router-dom";
export const Header = () => {
    return(
        <div className="hero-head">
            <div className="container">
                <h1 className="title">
                    <Link className="head-title" to="/">
                        Dynami
                    </Link>
                </h1>
                <h2 className="subtitle is-6">
                    Solving Nigeria power problem, one mini-grid at a time.
                </h2>
            </div>
        </div>
    )
};
