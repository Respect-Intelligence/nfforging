import React from "react";

const contactInfo = [
  {
    office: "Registered & Works Office",
    email: "info@nfforging.com",
    address: `Sankrail Industrial Park
N.H. 6 (Bombay Road), Dhulagarh, Sankrail
Howrah - 711 302, West Bengal, India`,
    phone: "+91 33 2661 7660",
    hours: "Mon-Fri: 8am – 7pm",
  },
  {
    office: "Corporate Office",
    email: "marketing@nfforging.com",
    address: `The Legacy, 25A Shakespeare Sarani
3rd Floor, Unit No. 38A, Kolkata - 700 017`,
    phone: "+91 33 4600 9083",
    hours: "Mon-Fri: 8am – 7pm",
  },
];

const ContactInfoSection = () => {
  return (
    <section className="contact-info pt-70 pb-70">
      <div className="container">
        <div className="row">
          {contactInfo.map((info, index) => (
            <div
              className="col-sm-12 col-md-6 col-lg-6 mb-2 mb-md-0"
              key={index}
            >
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">{info.office}</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    <span>Email: </span>{" "}
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                  </li>
                  <li>
                    {" "}
                    <span>Address: </span> {info.address}
                  </li>
                  <li>
                    <span>Phone: </span>{" "}
                    <a href={`tel:${info.phone.replace(/\s/g, "")}`}>
                      {info.phone}
                    </a>
                  </li>
                  <li>
                    <span>Hours: </span> {info.hours}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
