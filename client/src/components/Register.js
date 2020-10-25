import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Register = () => {
    return (
      <section className="hero is-fullwidth is-primary is-fullheight">
        <Header/>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">&nbsp;</div>
              <div className="column">
                <form className="form container">
                  <div className="field">
                    <h1 className="title is-3">Create An Account</h1>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="username" className="label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="username"
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="email" className="label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="input"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="password" className="label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="input"
                        id="password"
                        name="password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="firstname" className="label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="firstname"
                        name="firstname"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="lastname" className="label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="lastname"
                        name="lastname"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="phone" className="label">
                        Phone
                      </label>
                      <input type="tel" className="input" id="phone" name="phone" />
                    </div>
                  </div>
                  <div className="field">
                    <label for="user_type" className="label">
                      You are signing up as who?
                    </label>
                    <div className="control">
                      <div className="select">
                        <select name="user_type" id="user_type" className="input">
                          <option value="0">
                            Select the appropriate option.
                          </option>
                          <option value="1">Donor</option>
                          <option value="2">Mini Grid Developer</option>
                          <option value="3">Vendor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label for="address" className="label">
                        Address
                      </label>
                      <textarea
                        className="textarea"
                        id="address"
                        name="address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">&nbsp;</div>
                  <div className="field">
                    <button type="submit" className="button is-link">
                      Register
                    </button>
                  </div>
                  <div className="field">&nbsp;</div>
                  <div className="field">
                    Already has an account? <Link to="/login">Login Here.</Link>
                  </div>
                </form>
              </div>
              <div className="column">&nbsp;</div>
            </div>
          </div>
        </div>
        <Footer/>
        </section>
    );
}