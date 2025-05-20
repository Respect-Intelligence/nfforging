"use client";

import Image from "next/image";
import logoLight from "@/assets/images/logo/logo-light.png";
import logoDark from "@/assets/images/logo/logo-dark.png";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

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
          <Link className="navbar-brand" href="/">
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
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className=" navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item">
                <Link href="/" className="nav__item-link active">
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/about-us" className="nav__item-link">
                  About Us
                </Link>
              </li>

              <li className="nav__item with-dropdown">
                <Link
                  href="/product-service"
                  className="dropdown-toggle nav__item-link"
                >
                  Product & Services
                </Link>
                <i className="fa fa-angle-down" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item with-dropdown">
                    <Link href="#" className="nav__item-link">
                      CRF
                    </Link>
                    {/* <ul className="dropdown-menu">
                      <li className="nav__item">
                        <Link href="crf-overview.html" className="nav__item-link">
                          Overview
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="sheet-piles.html" className="nav__item-link">
                          Sheet Piles
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="solar-module.html" className="nav__item-link">
                          Solar Module Mounting Solutions
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link href="wagon-coaches.html" className="nav__item-link">
                          Wagon & Coaches
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="pre-engineered-building.html"
                          className="nav__item-link"
                        >
                          Pre Engineered Building
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="crash-barriers.html"
                          className="nav__item-link"
                        >
                          Crash Barriers
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav__item with-dropdown">
                    <Link href="#" className="nav__item-link">
                      Foundry
                    </Link>
                    {/* <ul className="dropdown-menu">
                      <li className="nav__item">
                        <Link
                          href="foundry-overview.html"
                          className="nav__item-link"
                        >
                          Overview
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="foundry-products.html"
                          className="nav__item-link"
                        >
                          Products
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="infrastructure.html"
                          className="nav__item-link"
                        >
                          Infrastructure
                        </Link>
                      </li>
                      <li className="nav__item">
                        <Link
                          href="foundry-quality.html"
                          className="nav__item-link"
                        >
                          Quality
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav__item">
                    <Link href="fabrication.html" className="nav__item-link">
                      Fabrication
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link href="services.html" className="nav__item-link">
                      Services
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav__item">
                <Link href="careers.html" className="nav__item-link">
                  Careers
                </Link>
              </li>

              <li className="nav__item">
                <Link href="media.html" className="nav__item-link">
                  Sustainability
                </Link>
              </li>

              <li className="nav__item">
                <Link href="contact-us" className="nav__item-link">
                  Contact
                </Link>
              </li>
              <li className="nav__item nav__item-btn d-none d-md-block">
                <Link
                  href="request-quote.html"
                  className="btn btn__primary action__btn-request"
                >
                  <span>Get A Quote</span>
                  <ArrowRight height={18} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact__number d-flex align-items-center gap-2">
            <span className="phone-icon-wrapper">
              <Phone />
            </span>
            <Link href="tel:5565454117">55 654 541 17</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
