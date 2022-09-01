import React from "react";
import "./Footer.css";
import footer_logo from "../../../images/logoo.png";
import { IoCallSharp } from "react-icons/io5";
import { ImMail2 } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const FFFooter = () => {
  return (
    <footer>
      <svg viewBox="0 0 120 28">
        <defs>
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="#fff" />
          </mask>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
             1 0 0 0 0  
             0 1 0 0 0  
             0 0 1 0 0  
             0 0 0 13 -9"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <path
            id="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </defs>

        <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2"></use>
        <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0"></use>

        <g class="gooeff">
          <circle class="drop drop1" cx="20" cy="2" r="1.8" />
          <circle class="drop drop2" cx="25" cy="2.5" r="1.5" />
          <circle class="drop drop3" cx="16" cy="2.8" r="1.2" />
          <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />

          <path
            id="wave1"
            class="wave"
            d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
          />
        </g>
      </svg>

      <div class="footer-content">
        <div class="footer-content-column">
          <div class="footer-logo">
            <a class="footer-logo-link" href="#">
              <span class="hidden-link-text">LOGO</span>

              <img src={footer_logo} alt="logo" width={"200px"} />
            </a>
          </div>
          <div class="footer-menu">
            <ul id="menu-get-started" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <p>
                  Ravian Closet, our aim is to produce beautiful clothing
                  collections appealing to the everyday girl with a taste of
                  elegance and style bringing something fresh and new to the
                  high street and fashion world.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Company</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Contact</a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">News</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class="footer-menu">
            <h2 class="footer-menu-name"> Legal</h2>
            <ul id="menu-legal" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                <a href="#">Privacy Notice</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-content-column">
          <div class="footer-menu">
            <div className="usefullinks">
              <h2 class="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" class="footer-menu-list">
                <li class="menu-item menu-item-type-custom menu-item-object-custom  ">
                  <a target="_self" rel="noopener noreferrer" href="#" id="1">
                    Home
                  </a>
                </li>
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom"
                  className="prodcuts"
                >
                  <a
                    target="_self"
                    rel="noopener noreferrer"
                    href="/products"
                    className="prodcuts"
                  >
                    Products
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/contact" id="3">
                    Contact
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/about" id="4">
                    About us
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/cart" id="5">
                    Cart
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/login" id="6">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-content-column">
          <div class="footer-call-to-action">
            <h2 class="footer-call-to-action-title"> Let's Chat</h2>
            <p class="footer-call-to-action-description">
              Have a support question?
            </p>
            <a
              class="footer-call-to-action-button button"
              href="/contact"
              target="_self"
            >
              <ImMail2 size={20} /> Get in Touch
            </a>
          </div>
          <center>
            <div class="footer-call-to-action">
              <IoCallSharp size={35} />
              <h2 class="footer-call-to-action-title">Call Us</h2>
              <p class="footer-call-to-action-link-wrapper">
                <a
                  class="footer-call-to-action-link"
                  href="tel:+923446959056"
                  target="_self"
                >
                  +92 344 695 9056
                </a>
              </p>
            </div>
          </center>
        </div>
      </div>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/atifjalal" target="_blank">
          <SiLinkedin size={35} />
        </a>
        <a href="https://facebook.com/atifjalall" target="_blank">
          <SiFacebook size={35} />
        </a>
        <a href="https://instagram.com/atifjalall" target="_blank">
          <SiInstagram size={35} />
        </a>
        <a href="https://github.com/atifjalall" target="_blank">
          <SiGithub size={35} />
        </a>
      </div>
    </footer>
  );
};

export default FFFooter;
