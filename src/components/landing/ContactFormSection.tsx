import { Phone } from "lucide-react";

export default function ContactFormSection() {
  return (
    <>
      <section className="contact-layout2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="contact-panel mt--140">
                <div className="contact__panel-info">
                  <div className="contact__panel-info-top">
                    <div className="contact-info-box">
                      <h3>Registered & Works Office</h3>
                      <h4 className="contact__info-box-title">Our Location</h4>
                      <ul className="contact__info-list list-unstyled">
                        <li>
                          Sankrail Industrial Park N.H. 6 (Bombay Road),
                          Dhulagarh, Sankrail Howrah - 711 302, West Bengal,
                          India
                        </li>
                      </ul>
                    </div>
                    <div className="contact-info-box">
                      <h4 className="contact__info-box-title">Quick Contact</h4>
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
                <form
                  method="post"
                  action="assets/php/contact.php"
                  id="contactForm"
                  className="contact__panel-form"
                  noValidate
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <h4 className="contact__panel-title">Send Us Message</h4>
                      <p className="contact__panel-desc mb-40">
                        Have questions or want to start a project with us? At NF
                        Forgings, we believe in building lasting relationships
                        through precision, trust, and innovation. Reach out to
                        discover how our experienced team and engineering
                        expertise can help bring your vision to life.
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
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
                          placeholder="Email"
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
                          placeholder="Phone"
                          id="contact-Phone"
                          name="contact-phone"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option>select your industry</option>
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
                    <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap align-items-center">
                      <button
                        type="submit"
                        className="btn btn__secondary mr-40"
                      >
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
