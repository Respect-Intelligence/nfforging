"use client";

import Image from "next/image";
import logoLight from "@/assets/images/logo/logo-light.png";
import logoDark from "@/assets/images/logo/logo-dark.png";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 992) {
        setIsSticky(window.scrollY > 200);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="header header-transparent header-layout1">
      <nav
        className={`navbar navbar-expand-lg sticky-navbar ${
          isSticky ? "fixed-navbar" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="/images/logo.png"
              className="logo-light navbar-logo"
              alt=""
            />
            <img
              src="/images/logo.png"
              className="logo-dark navbar-logo"
              alt=""
            />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className=" navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item">
                <a href="/" className="nav__item-link active">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="about-us" className="nav__item-link">
                  About Us
                </a>
              </li>

              <li className="nav__item with-dropdown">
                <a href="#" className="dropdown-toggle nav__item-link">
                  Products & Services
                </a>
                <i className="fa fa-angle-down" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item with-dropdown">
                    <a href="#" className="nav__item-link">
                      CRF
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a href="crf-overview.html" className="nav__item-link">
                          Overview
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="sheet-piles.html" className="nav__item-link">
                          Sheet Piles
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="solar-module.html" className="nav__item-link">
                          Solar Module Mounting Solutions
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="wagon-coaches.html" className="nav__item-link">
                          Wagon & Coaches
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="pre-engineered-building.html"
                          className="nav__item-link"
                        >
                          Pre Engineered Building
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="crash-barriers.html"
                          className="nav__item-link"
                        >
                          Crash Barriers
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__item with-dropdown">
                    <a href="#" className="nav__item-link">
                      Foundry
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a
                          href="foundry-overview.html"
                          className="nav__item-link"
                        >
                          Overview
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="foundry-products.html"
                          className="nav__item-link"
                        >
                          Products
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="infrastructure.html"
                          className="nav__item-link"
                        >
                          Infrastructure
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="foundry-quality.html"
                          className="nav__item-link"
                        >
                          Quality
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__item">
                    <a href="fabrication.html" className="nav__item-link">
                      Fabrication
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="services.html" className="nav__item-link">
                      Services
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav__item">
                <a href="careers.html" className="nav__item-link">
                  Careers
                </a>
              </li>

              <li className="nav__item">
                <a href="media.html" className="nav__item-link">
                  Sustainability
                </a>
              </li>

              <li className="nav__item">
                <a href="contact.html" className="nav__item-link">
                  Contact
                </a>
              </li>
              <li className="nav__item nav__item-btn d-none d-md-block">
                <a
                  href="request-quote.html"
                  className="btn btn__primary action__btn-request"
                >
                  <span>Get A Quote</span>
                  <ArrowRight height={18} />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact__number d-flex align-items-center gap-2">
            <span className="phone-icon-wrapper">
              <Phone />
            </span>
            <a href="tel:5565454117">55 654 541 17</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
