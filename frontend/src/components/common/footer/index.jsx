import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import TopFooter from "./top_footer";
import "./index.css";

export default class footer extends Component {
  render() {
    return (
      <footer className="footer py-3">
        <div className="container">
          <TopFooter />
          <nav>
            <ul className="row menu-text">
              <li className="col footer_link">
                <Link className="footer-list" to="/">
                  Home
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/about">
                  About
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/contact-us">
                  Contact
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/enroll">
                  Enroll
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/ambassadors">
                  Volunteer
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="col footer_link">
                <Link className="footer-list" to="/events">
                  Events
                </Link>
              </li>
            </ul>
            <div id="tsocial">
              <NavLink href="https://www.facebook.com/theymim/">
                <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
              </NavLink>
              <NavLink href="https://www.instagram.com/theyoungmasterbuilders">
                <FontAwesomeIcon className="insta" icon={faInstagram} />
              </NavLink>
              <NavLink href="https://www.instagram.com/theyoungmasterbuilders">
                <FontAwesomeIcon className="twitter" icon={faTwitter} />
              </NavLink>
            </div>
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
    );
  }
}
