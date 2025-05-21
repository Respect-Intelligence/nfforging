"use client";

import Image from "next/image";
import logoLight from "@/assets/images/logo/logo-light.png";
import logoDark from "@/assets/images/logo/logo-dark.png";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  {
    title: "Product & Services",

    children: [
      { title: "CRF", href: "/crf" },
      { title: "Foundry", href: "/foundry" },
      { title: "Fabrication", href: "/fabrication" },
      { title: "Services", href: "/services" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Sustainability", href: "/media" },
  { title: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const isActive = (href: string) => {
    // if (href == "/" || href == "") {
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
                      <i
                        className="fa fa-angle-down"
                        data-toggle="dropdown"
                      ></i>
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

              <li className="nav__item nav__item-btn d-none d-md-block">
                <Link
                  href="/request-quote.html"
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
