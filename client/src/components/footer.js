/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className="container-fluid footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us for fueling and mechanical services for wheels
        </p>
        <p className="footer-subscription-text">
          Save your time and find us on your doorstep
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn btn-secondary p-2 ">
              <Link className="text-white" to="/signup-signin">
                Join Us
              </Link>
            </button>
          </form>
        </div>
      </section>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-3 col-12 ">
            <h2 className="text-center">About Us</h2>
            <ul className="list-unstyled text-center">
              <li>
                <Link className="text-white" to="/work-at-door-step">
                  Working at door step
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/previous-experiences">
                  Previous Experiences
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/best-fueling-services">
                  Best fueling services
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/partnership">
                  Partnership holders
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/terms-of-services">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <h2 className="text-center">Contact Us</h2>
            <ul class="list-unstyled text-center">
              <li>
                <Link className="text-white" to="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <h2 className="text-center">Videos</h2>
            <ul class="list-unstyled text-center">
              <li>
                <Link className="text-white" to="/">
                  Ordering
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/how-it-works">
                  Our working methodology
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/">
                  Finding the provider
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-12">
            <h2 className="text-center">Social Media</h2>
            <ul className="list-unstyled text-center">
              <li>
                <a
                  className="text-white"
                  href="https://www.instagram.com/gasupapp2020/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  href="https://www.facebook.com/GasUp-108738594720064"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.linkedin.com/in/gas-up-a52663211/"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCHtHfcXfpUm3GExUivQHZ8A"
                >
                  YouTbe
                </a>
              </li>
              <li>
                <a
                  className="text-white"
                  target="_blank"
                  href="https://twitter.com/GasUp05433435"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo text-dark">
              GasUp
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights text-dark">GasUp © 2021</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook text-dark"
              href="https://www.facebook.com/GasUp-108738594720064"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram text-dark"
              href="https://www.instagram.com/gasupapp2020/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              to="/"
              className="social-icon-link youtube text-dark"
              href="https://www.youtube.com/channel/UCHtHfcXfpUm3GExUivQHZ8A"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter text-dark"
              href="https://twitter.com/GasUp05433435"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link linkedin text-dark"
              href="https://www.linkedin.com/in/gas-up-a52663211/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;