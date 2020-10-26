import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import { Header } from "./Header";
import { Footer } from "./Footer";

import Auth from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="notification is-danger">
        <button className="delete"></button>
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e){
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    //this.form.validateAll();

    //if (this.checkBtn.context._errors.length === 0) {
      Auth.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/dashboard");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    /*} else {
      this.setState({
        loading: false
      });
    }*/
  }

  render() {
    return (
      <section className="hero is-fullwidth is-primary is-fullheight">
        <Header />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">&nbsp;</div>
              <div className="column">
                <form
                  onSubmit={this.handleLogin}
                  ref={(c) => {
                    this.form = c;
                  }}
                  className="form container"
                >
                  <div className="columns is-centered">
                    <div className="column is-half">
                      <figure className="image is-128x128">
                        <img
                          className="is-rounded is-centered"
                          src={avatar}
                          alt="user avatar"
                        />
                      </figure>
                    </div>
                  </div>
                  {this.state.message && (
                    <div className="field">
                      <div className="notification is-danger">
                        <button className="delete"></button>
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <div className="field">
                    <label htmlFor="email" className="label">
                      E-mail
                    </label>
                    <div className="control">
                      <input
                        type="email"
                        className="input"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeUsername}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">&nbsp;</div>
                  <div className="field">
                    <button
                      type="submit"
                      className="button is-link ({this.state.loading})?{is-loading}:{}"
                      disabled={this.state.loading}
                    >
                      Login
                    </button>
                  </div>
                  <div className="field">&nbsp;</div>
                  <div className="field">
                    You don't have an account?{" "}
                    <Link to="/register">Register/Sign Up Here.</Link>
                  </div>
                </form>
              </div>
              <div className="column">&nbsp;</div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}