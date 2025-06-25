import { Phone } from "lucide-react";

import ContactForm from "../ContactForm";

export default function ContactFormSection() {
  return (
    <>
      <section className="contact-layout2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="contact-panel ">
                <div className="col-sm-12">
                  <h4 className="contact__panel-title">Send Us Message</h4>
                  <div className="d-flex justify-content-center">
                    <p className="contact__panel-desc mb-40">
                      Have questions or want to start a project with us? At NF
                      Forgings, we believe in building lasting relationships
                      through precision, trust, and innovation. Reach out to
                      discover how our experienced team and engineering
                      expertise can help bring your vision to life.
                    </p>
                  </div>
                </div>
                <ContactForm />
                <div className="contact__panel-info">
                  <div className="contact__panel-info-top">
                    <div className="contact-info-box ">
                      <h3>Registered & Works Office</h3>
                      {/* <h4 className="contact__info-box-title">Our Location</h4> */}
                      <ul className="contact__info-list list-unstyled">
                        <li>
                          <span className="locationIcon">
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_29_91)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12.18 24.5C5.55363 24.5 0.179993 19.1264 0.179993 12.5C0.179993 5.87364 5.55363 0.5 12.18 0.5C18.8064 0.5 24.18 5.87364 24.18 12.5C24.18 19.1264 18.8064 24.5 12.18 24.5ZM12.18 4.69471C15.4627 4.69471 18.1238 7.35578 18.1238 10.6385C18.1238 13.9211 12.18 20.3052 12.18 20.3052C12.18 20.3052 6.23621 13.9211 6.23621 10.6385C6.23621 7.35578 8.89728 4.69471 12.18 4.69471ZM12.18 8.27695C13.4246 8.27695 14.4339 9.28627 14.4339 10.531C14.4339 11.7756 13.4246 12.7849 12.18 12.7849C10.9354 12.7849 9.92607 11.7756 9.92607 10.531C9.92607 9.28627 10.9354 8.27695 12.18 8.27695Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_29_91">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0.179993 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          Sankrail Industrial Park N.H. 6 (Bombay Road),
                          Dhulagarh, Sankrail Howrah - 711 302, West Bengal,
                          India
                        </li>
                      </ul>
                    </div>
                    <div className="contact-info-box">
                      <h3 className="contact__info-box-title">Quick Contact</h3>
                      <ul className="contact__info-list list-unstyled">
                        <li>
                          Email:{" "}
                          <a href="mailto:info@nfforging.com">
                            info@nfforging.com
                          </a>
                        </li>
                        <li>
                          Support:{" "}
                          <a href="mailto:info@nfforging.com">
                            info@nfforging.com
                          </a>
                        </li>
                        <li>
                          Mobile:{" "}
                          <a href="tel:+91 33 2661 7660">+91 33 2661 7660</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="contact__panel-info-bottom bg-theme2">
                    <strong className="contact__panel-info-title">
                      We will get back to you within 24 hours, or call us
                      everyday, 09:00 AM - 12:00 PM
                    </strong>
                    <div className="contact__number gap-2 d-flex align-items-center">
                      <span className="phone_icon_svg">
                        <Phone />
                      </span>
                      <a href="tel:+91 33 2661 7660">+91 33 2661 7660</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
