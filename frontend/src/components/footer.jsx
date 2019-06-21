import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default class footer extends Component {
  render() {
    return (
      <>
        <footer className="footer py-3">
          <div className="container">
            <nav>
              <ul className="row menu-text">
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/events"
                  >
                    Home
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/meet-the-team"
                  >
                    Contact
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/events"
                  >
                    Enroll
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/ambassadors"
                  >
                    Volunteer
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/events"
                  >
                    Donate
                  </Link>
                </li>
                <li className="col footer_link">
                  <Link
                    style={{ color: "white", fontSize: "14pt" }}
                    to="/events"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-contact">
            <h5>
              <a className="contact" href="mailto:founder@theymim.org">
                founder@theymim.org
              </a>
              <p>773.941.1200</p>
            </h5>
          </div>
        </footer>
      </>
    );
  }
}
