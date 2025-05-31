import { contactDetails } from "@/assets/static/data";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

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
                      <a href="#" className="">
                        {/* <i className="fa fa-facebook"></i> */}
                        <Facebook
                          fill="#fff"
                          stroke="none"
                          height={18}
                          className="fillIcon"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Instagram height={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Twitter
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
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="#">Sheet Piles</a>
                      </li>
                      <li>
                        <a href="#">Solar Module Mounting Solutions</a>
                      </li>
                      <li>
                        <a href="#">Wagon & Coaches</a>
                      </li>
                      <li>
                        <a href="#">Pre Engineered Building</a>
                      </li>
                      <li>
                        <a href="#">Crash Barriers</a>
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
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="#">Products</a>
                      </li>
                      <li>
                        <a href="#">Infrastructure</a>
                      </li>
                      <li>
                        <a href="#">Quality</a>
                      </li>
                      <li>
                        <a href="#">Fabrication</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Quick Links / Brochure */}
                <div className="d-none">
                  <h6 className="footer__widget-title">Quick Links</h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                        <li>
                          <a href="#" download>
                            Download Brochure
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 footer__widget footer__widget-newsletter">
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
              </div>
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
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Disclaimer</a>
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
