export default function MapSection() {
  return (
    <>
      <section className="google-map-layout2 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 position-relative">
              <div className="contact-info-carousel ">
                <h5 className="contact__info-title">Locations</h5>

                <div
                  className="contact-info-box slick-slide slick-cloned m-0"
                  data-slick-index="-1"
                  aria-hidden="true"
                  style={{ width: "240px" }}
                  tabIndex={-1}
                >
                  <h4 className="contact__info-box-title">
                    Registered & Works Office
                  </h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>
                      Sankrail Industrial Park N.H. 6 (Bombay Road), Dhulagarh,
                      Sankrail Howrah - 711 302, West Bengal, India
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:info@nfforging.com" tabIndex={-1}>
                        info@nfforging.com
                      </a>
                    </li>
                    <li>
                      Mobile:{" "}
                      <a href="tel:+91 33 2661 7660" tabIndex={-1}>
                        +91 33 2661 7660
                      </a>
                    </li>
                    <li>Hours: Mon-Fri: 8am – 7pm</li>
                  </ul>
                </div>
              </div>

              <div
                id="map"
                style={{
                  height: "460px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="h-100 w-100 position-position-absolute left-0 top-0"
                  style={{
                    backgroundColor: "rgb(229, 227, 223)",
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2461128511936!2d88.1792485149505!3d22.569896638757783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027fcee9a589fd%3A0xd1ca0d3965c90b4a!2sNF%20Forgings%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1651575120857!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
