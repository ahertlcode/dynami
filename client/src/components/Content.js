import React from "react";
import { Link } from "react-router-dom";
import grid from "../images/grid.jpg";
import solar from "../images/solar.jpg";
import wind from "../images/wind.jpg";
import biomas from "../images/biomas.jpg";

import { Projects } from "../admins/Projects";

export const Content = () => {
    return (
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 has-text-justified">
              Dynami is an online platform, that allow you to make impactful
              donation to societal development in away that solves real world
              power problem. Through your donation we finance sustainable power
              project that benefit both people and the planet.
              <br />
              <br />
              <div className="columns">
                <div className="column">
                  <figure className="image is-square">
                    <img src={solar} alt="Solar Panels." />
                  </figure>
                </div>
                <div className="column">
                  <figure className="image is-square">
                    <img src={wind} alt="wind Mills" />
                  </figure>
                </div>
                <div className="column">
                  <figure className="image is-square">
                    <img src={biomas} alt="Biomas Energy." />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <figure className="image is-5by3">
                <img src={grid} alt="A mini-grid layout." />
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
                  Your can support this project, delivering stable power supply
                  to the many Nigeria societies and communities without a stable
                  power supply by donating to finance sustainable mini-grid
                  power projects.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Vendor</p>
                </header>
                <div className="card-content">
                  Your can support, delivering stable power supply to the many
                  Nigeria societies and communities without power supply by
                  donating to finance a sustainable mini-grid project.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">Developer</p>
                </header>
                <div className="card-content">
                  Your can support, delivering stable power supply to the many
                  Nigeria societies and communities without power supply by
                  donating to finance a sustainable mini-grid project.
                </div>
              </div>
            </div>
          </div>
          <div className="columns">Registered Vendors</div>
          <div className="columns">Registered Vendors</div>
          <div className="columns">
            <div id="projects">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
};
