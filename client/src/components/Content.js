import React from "react";
import { Link } from "react-router-dom";
import grid from "../images/grid.jpg";
export const Content = () => {
    return (
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
                    Your can support this project, delivering stable power
                    supply to the many Nigeria societies and communities without
                    a stable power supply by donating to finance sustainable
                    mini-grid power projects.
                  </div>
                  <footer className="card-footer">
                    <Link to="/register" className="card-footer-item">
                      Donate Here.
                    </Link>
                  </footer>
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
                  <footer className="card-footer">
                    <Link to="/register" className="card-footer-item">
                      Start Here.
                    </Link>
                  </footer>
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
                  <footer className="card-footer">
                    <Link to="/register" className="card-footer-item">
                      Start Here.
                    </Link>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};
