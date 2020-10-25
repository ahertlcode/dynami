import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import avatar from "../images/avatar.png";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Login = () => {
    return(
    <section className="hero is-fullwidth is-primary is-fullheight">
        <Header/>
        <div className="hero-body">
            <div className="container">
                <div className="columns">
                <div className="column">&nbsp;</div>
                <div className="column">
                    <form className="form container">
                        <div className="columns is-centered">
                            <div className="column is-half">
                                <figure className="image is-128x128">
                                    <img className="is-rounded is-centered" src={avatar} alt="user avatar" />
                                </figure>
                            </div>
                        </div>
                        <div className="field">
                            <label for="username" className="label">Username</label>
                            <div className="control">
                                <input type="text" className="input" id="username" name="username" />
                            </div>
                        </div>
                        <div className="field">
                            <label for="password" className="label">Password</label>
                            <div className="control">
                                <input type="password" className="input" id="password" name="password" />
                            </div>
                        </div>
                        <div className="field">&nbsp;</div>
                        <div className="field">
                            <button type="submit" className="button is-link">Login</button>
                        </div>
                        <div className="field">&nbsp;</div>
                        <div className="field">
                            You don't have an account? <Link to="/register">Register/Sign Up Here.</Link>
                        </div>
                    </form>
                </div>
                <div className="column">&nbsp;</div>
            </div>
            </div>
        </div>
        <Footer/>
    </section>
    )
}