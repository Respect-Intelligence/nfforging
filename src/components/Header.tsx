"use client";

import Image from "next/image";
import logoLight from "@/assets/images/logo/logo-light.png";
import logoDark from "@/assets/images/logo/logo-dark.png";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactDetails } from "@/assets/static/data";
import Popup from "./Popup";
const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  {
    title: "Product & Services",
    href: "",
    children: [
      {
        title: "CRF",
        href: "/crf",

        children: [
          { title: "Overview", href: "/crf" },
          { title: "Sheet Piles", href: "/crf/sheet-piles" },
          {
            title: "Solar Module Mounting Solutions",
            href: "/crf/solar-module",
          },
          { title: "Wagon & Coaches", href: "/crf/wagon-coaches" },
          {
            title: "Pre Engineered Building",
            href: "/crf/pre-engineered-building",
          },
          { title: "Crash Barriers", href: "/crf/crash-barriers" },
        ],
      },
      {
        title: "Foundry",
        href: "/foundry",
        children: [
          { title: "Products", href: "/crf/products" },
          { title: "Infrastructure", href: "/crf/infrastructure" },
          { title: "Quality Assurance", href: "/crf/foundry-quality" },
        ],
      },
      { title: "Fabrication", href: "/fabrication" },
      { title: "Services", href: "/services" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Sustainability", href: "/sustainability" },
  { title: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isGetQuotePopupOpen, setIsGetQuotePopupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobilenavOpen, setIsMobilenavOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (href: string) => {
    // if (href == "/") {
    // }
    return pathname == href;
    // return pathname.includes(href);
  };

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
    <>
      <Popup
        isOpen={isGetQuotePopupOpen}
        onClose={() => setIsGetQuotePopupOpen(false)}
        className="contact-layout2 "
      >
        <div className="contact-panel p-0  box-shadow-none">
          <div className="col-sm-12">
            <h4 className="contact__panel-title">Send Us Message</h4>
            <div className="d-flex justify-content-center">
              <p className="contact__panel-desc mb-40">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <form
            method="post"
            action="assets/php/contact.php"
            id="contactForm"
            className="contact__panel-form  border-r-0"
            noValidate
          >
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name*"
                    id="contact-name"
                    name="contact-name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    id="contact-email"
                    name="contact-email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone*"
                    id="contact-Phone"
                    name="contact-phone"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <select
                    className="form-control form-select"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      select your industry*
                    </option>

                    <option>Petroleum &amp; Gas Energy</option>
                    <option>Construction &amp; Engineering</option>
                    <option>Mechanical Engineering</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Additional Details!"
                    id="contact-messgae"
                    name="contact-messgae"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center">
                <button type="submit" className="btn btn__primary mr-40">
                  <span className="mx-2">Submit Request</span>
                  <i className="icon-arrow-right mx-2"></i>
                </button>
                <div className="form-group input-radio my-3">
                  <label className="label-radio">
                    I accept the privacy and terms.
                    <input type="checkbox" defaultChecked />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className="contact__panel-info">
            <img src="/images/contactus.jpg" alt="" />
          </div>
        </div>
      </Popup>
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
            <button
              className={`navbar-toggler ${isMobilenavOpen ? "actived" : ""}`}
              type="button"
              onClick={() => {
                setIsMobilenavOpen(!isMobilenavOpen);
              }}
            >
              <span className="menu-lines">
                <span></span>
              </span>
            </button>
            <div
              className={`navbar-collapse ${
                isMobilenavOpen ? "menu-opened" : ""
              }`}
              id="mainNavigation"
            >
              <ul className="navbar-nav">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`nav__item ${
                      item.children ? "with-dropdown" : ""
                    }`}
                  >
                    <Link
                      href={item.href ? item.href : "#"}
                      className={`nav__item-link ${
                        isActive(item.href) ? "active" : ""
                      } ${item.children ? "dropdown-toggle" : ""}`}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <>
                        <button className="dropdown-toggler d-md-none">
                          <ChevronDown />
                        </button>
                        <ul className="dropdown-menu">
                          {item.children.map((child, cIdx) => (
                            <li
                              key={cIdx}
                              className={`nav__item ${
                                child.children ? "with-dropdown" : ""
                              }`}
                            >
                              <Link
                                href={child.href}
                                className={`nav__item-link ${
                                  isActive(child.href) ? "active" : ""
                                }`}
                              >
                                {child.title}
                              </Link>
                              {child.children && (
                                <ul className="dropdown-menu">
                                  {child.children.map((sub, sIdx) => (
                                    <li className="nav__item" key={sIdx}>
                                      <Link
                                        href={sub.href}
                                        className={`nav__item-link ${
                                          isActive(sub.href) ? "active" : ""
                                        }`}
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}

                <li className="nav__item nav__item-btn d-none d-md-block ">
                  <button
                    // href="/request-quote.html"
                    type="button"
                    onClick={() => {
                      setIsGetQuotePopupOpen(true);
                    }}
                    className="btn btn__primary action__btn-request get-aquoteBtn"
                  >
                    <span>Get A Quote</span>
                    <ArrowRight height={18} />
                  </button>
                </li>
              </ul>
            </div>
            <div className="contact__number d-flex align-items-center gap-2">
              <span className="phone-icon-wrapper">
                <Phone />
              </span>
              <Link href={`tel:${contactDetails.phone}`}>
                {contactDetails.phone}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
