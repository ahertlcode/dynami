import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import Auth from "../services/auth.service";
import UserType from "../services/usertype.service";

const usertype = UserType.getUserTypes();
const sltUserType = document.getElementById("userTypeId");
console.log(usertype);
usertype.forEach(obj => {
  const opt = document.createElement("option");
  opt.value = obj.id;
  opt.text = obj.UserType;
  sltUserType.apend(opt);
})

const required = (value) => {
  if (!value) {
    return (
      <div className="notification is-danger">
        <button className="delete"></button>
        This field is required!
      </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeWalletAddress = this.onChangeWalletAddress.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
      walletAddress: "",
      address: "",
      userTypeId: "",
      loading: false,
      message: "",
    };
  }

  onChangeWalletAddress(e) {
    this.setState({
      walletAddress: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeUserType(e) {
    this.setState({
      userTypeId: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  handleRegister(e){
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    Auth.register(this.state).then(
      () => {
        this.props.history.push("/login");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
      }
    );
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
                  className="form container"
                  onSubmit={this.handleRegister}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  <div className="field">
                    <h1 className="title is-3">Create An Account</h1>
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
                    <div className="control">
                      <label htmlFor="username" className="label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="email" className="label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="input"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="password" className="label">
                        Password
                      </label>
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
                  <div className="field">
                    <div className="control">
                      <label htmlFor="firstname" className="label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="firstname"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstName}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="lastname" className="label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="input"
                        id="lastname"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.onChangeLastName}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="phone" className="label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="input"
                        id="phone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        validations={[required]}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="user_type" className="label">
                      You are signing up as who?
                    </label>
                    <div className="control">
                      <div className="select">
                        <select
                          name="userTypeId"
                          id="userTypeId"
                          className="input"
                          onChange={this.onChangeUserType}
                          validations={[required]}
                        >
                          <option value="0">
                            Select the appropriate option.
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="address" className="label">
                        Address
                      </label>
                      <textarea
                        className="textarea"
                        id="address"
                        name="address"
                        onChange={this.onChangeAddress}
                      >
                        {this.state.address}
                      </textarea>
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
        <Footer />
      </section>
    );
  }
}