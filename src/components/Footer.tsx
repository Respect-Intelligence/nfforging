import Link from "next/link";
import { contactDetails } from "@/assets/static/data";
import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Company Info */}
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-4 footer__widget footer__widget-about">
                <div className="footer__widget-content">
                  <img
                    src="/images/logo.png"
                    alt="NF Forgings logo"
                    className="mb-30"
                  />
                  <p className="mb-20">
                    Corporate Office
                    <br />
                    The Legacy, 25A Shakespeare Sarani
                    <br />
                    3rd Floor, Unit No. 38A
                    <br />
                    Kolkata - 700 017
                    <br />
                    {contactDetails.phone}
                    <br />
                    <a href={`mailto:${contactDetails.email}`}>
                      {contactDetails.email}
                    </a>
                  </p>
                  <ul className="social__icons list-unstyled">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61575973403117"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook
                          fill="#fff"
                          stroke="none"
                          height={18}
                          className="fillIcon"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/nf-forgings/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin
                          fill="#fff"
                          stroke="none"
                          height={18}
                          className="fillIcon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CRF Division Links */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">CRF Division</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/crf">Overview</Link>
                      </li>
                      <li>
                        <Link href="/crf/sheet-piles">Sheet Piles</Link>
                      </li>
                      <li>
                        <Link href="/crf/solar-module">
                          Solar Module Mounting Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/crf/wagon-coaches">Wagon & Coaches</Link>
                      </li>
                      <li>
                        <Link href="/crf/pre-engineered-building">
                          Pre Engineered Building
                        </Link>
                      </li>
                      <li>
                        <Link href="/crf/crash-barriers">Crash Barriers</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Foundry Division Links */}
              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Foundry Division</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/foundry">Overview</Link>
                      </li>
                      <li>
                        <Link href="/foundry/products">Products</Link>
                      </li>
                      <li>
                        <Link href="/foundry/infrastructure">
                          Infrastructure
                        </Link>
                      </li>
                      <li>
                        <Link href="/foundry/foundry-quality">
                          Quality Assurance
                        </Link>
                      </li>
                      <li>
                        <Link href="/fabrication">Fabrication</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-nav">
                <div className="">
                  <h6 className="footer__widget-title">Quick Links</h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                          <Link href="/contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
                <h6 className="footer__widget-title">Newsletter</h6>
                <div className="footer__widget-content">
                  <p>
                    Sign up for industry alerts, our latest news, thoughts, and
                    insights from Promina.
                  </p>
                  <form className="widget__newsletter-form">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <button
                        type="submit"
                        className="btn btn__primary d-flex align-items-center justify-content-center flex-shrink-0"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </form>
                </div>
                <p className="text-right footer__more-info mt-20 mb-0">
                  Have a question? <a href="#">Click here</a>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-between">
                <nav>
                  <ul className="footer__copyright-links list-unstyled d-flex flex-wrap mb-0">
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </nav>
                <p className="mb-0 color-white">
                  Copyright © 2025 NF FORGINGS PVT. LTD. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
