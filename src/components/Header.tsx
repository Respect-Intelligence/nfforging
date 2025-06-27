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
import ContactForm from "./ContactForm";
const menuItems = [
  { id: "1", title: "Home", href: "/" },
  { id: "2", title: "About Us", href: "/about-us" },
  {
    id: "3",
    title: "Product & Services",
    href: "",
    children: [
      {
        id: "3_1",
        title: "CRF",
        href: "/crf",
        children: [
          { id: "3_1_1", title: "Overview", href: "/crf" },
          { id: "3_1_2", title: "Sheet Piles", href: "/crf/sheet-piles" },
          {
            id: "3_1_3",
            title: "Solar Module Mounting Solutions",
            href: "/crf/solar-module",
          },
          { id: "3_1_4", title: "Wagon & Coaches", href: "/crf/wagon-coaches" },
          {
            id: "3_1_5",
            title: "Pre Engineered Building",
            href: "/crf/pre-engineered-building",
          },
          { id: "3_1_6", title: "Crash Barriers", href: "/crf/crash-barriers" },
        ],
      },
      {
        id: "3_2",
        title: "Foundry",
        href: "/foundry",
        children: [
          { id: "3_2_1", title: "Overview", href: "/foundry" },
          { id: "3_2_2", title: "Products", href: "/foundry/products" },
          {
            id: "3_2_3",
            title: "Infrastructure",
            href: "/foundry/infrastructure",
          },
          {
            id: "3_2_4",
            title: "Quality Assurance",
            href: "/foundry/foundry-quality",
          },
        ],
      },
      { id: "3_3", title: "Fabrication", href: "/fabrication" },
      { id: "3_4", title: "Services", href: "/services" },
    ],
  },
  { id: "4", title: "Careers", href: "/careers" },
  { id: "5", title: "Sustainability", href: "/sustainability" },
  { id: "6", title: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isGetQuotePopupOpen, setIsGetQuotePopupOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobilenavOpen, setIsMobilenavOpen] = useState(false);
  const pathname = usePathname();
  const [mobileNavDropdownOpen, setMobileNavDropdownOpen] = useState<string[]>(
    []
  );
  console.log(pathname);

  const isActive = (href: string) => {
    console.log(pathname, href);
    console.log(pathname.startsWith(href + "/"));

    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };
  const isMenuActive = (item: any) => {
    if (!item) return false;
    if (item.href) {
      if (item.href === "/") return pathname === "/";
      if (pathname === item.href || pathname.startsWith(item.href + "/")) {
        return true;
      }
    }
    if (item.children) {
      return item.children.some((child: any) => isMenuActive(child));
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(pathname, "fd");
      setIsMobilenavOpen(false);
      if (
        pathname.indexOf("/blog") !== -1 ||
        pathname.indexOf("/careers") !== -1
      ) {
        setIsSticky(true);
      } else if (window.innerWidth >= 992) {
        setIsSticky(window.scrollY > 200);
      } else {
        setIsSticky(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  return (
    <>
      <Popup
        isOpen={isGetQuotePopupOpen}
        onClose={() => setIsGetQuotePopupOpen(false)}
        className="contact-layout2 "
      >
        <div className="contact-panel p-0 mt-0  box-shadow-none">
          <div className="col-sm-12">
            <h4 className="contact__panel-title">Send Us Message</h4>
            <div className="d-flex justify-content-center">
              <p className="contact__panel-desc mb-40">
                Send us a message and we'll get back to you as soon as possi
              </p>
            </div>
          </div>
          <ContactForm />
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
                src="/images/dark-logo.png"
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
                    onClick={(e) => {}}
                  >
                    <Link
                      href={item.href ? item.href : "#"}
                      className={`nav__item-link ${
                        // isActive(item.href) ? "active" : ""
                        isMenuActive(item) ? "active" : ""
                      } ${item.children ? "dropdown-toggle" : ""}`}
                    >
                      {item.title}{" "}
                      {item.children && (
                        <button
                          className={`dropdown-toggler d-md-none ${
                            mobileNavDropdownOpen.indexOf(item.id) === -1
                              ? ""
                              : "opened"
                          }`}
                          onClick={(e) => {
                            setMobileNavDropdownOpen((prev) => {
                              if (prev.indexOf(item.id) === -1) {
                                return [...prev, item.id];
                              } else {
                                return prev.filter((el) => el !== item.id);
                              }
                            });
                          }}
                        >
                          <ChevronDown />
                        </button>
                      )}
                    </Link>
                    {item.children && (
                      <>
                        {/* <button className="dropdown-toggler d-md-none">
                          <ChevronDown />
                        </button> */}
                        <ul
                          className={`dropdown-menu ${
                            mobileNavDropdownOpen.indexOf(item.id) === -1
                              ? ""
                              : "show"
                          }`}
                        >
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
                                  // isActive(child.href) ? "active" : ""
                                  isMenuActive(child) ? "active" : ""
                                }`}
                              >
                                {child.title}
                                {child.children && (
                                  <button
                                    className={`dropdown-toggler d-md-none ${
                                      mobileNavDropdownOpen.indexOf(
                                        child.id
                                      ) === -1
                                        ? ""
                                        : "opened"
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setMobileNavDropdownOpen((prev) => {
                                        if (prev.indexOf(child.id) === -1) {
                                          return [...prev, child.id];
                                        } else {
                                          return prev.filter(
                                            (el) => el !== child.id
                                          );
                                        }
                                      });
                                    }}
                                  >
                                    <ChevronDown />
                                  </button>
                                )}
                              </Link>
                              {child.children && (
                                <ul
                                  className={`dropdown-menu ${
                                    mobileNavDropdownOpen.indexOf(child.id) ===
                                    -1
                                      ? ""
                                      : "show"
                                  }`}
                                >
                                  {child.children.map((sub, sIdx) => (
                                    <li className="nav__item" key={sIdx}>
                                      <Link
                                        href={sub.href}
                                        className={`nav__item-link ${
                                          // isActive(sub.href) ? "active" : ""
                                          isMenuActive(sub) ? "active" : ""
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
            <div className="contact__number d-flex align-items-center gap-2 ps-3">
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
