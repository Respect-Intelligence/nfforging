import React from "react";

const contactInfo = [
  {
    office: "London Office",
    email: "Promina@7oroof.com",
    address: "2307 Beverley Rd Brooklyn, NY",
    phone: "55 654 541 17",
    hours: "Mon-Fri: 8am – 7pm",
  },
  {
    office: "Berlin Office",
    email: "Promina@7oroof.com",
    address: "2307 Beverley Rd Brooklyn, NY",
    phone: "55 654 541 17",
    hours: "Mon-Fri: 8am – 7pm",
  },
  {
    office: "Manchester Office",
    email: "Promina@7oroof.com",
    address: "2307 Beverley Rd Brooklyn, NY",
    phone: "55 654 541 17",
    hours: "Mon-Fri: 8am – 7pm",
  },
];

const ContactInfoSection = () => {
  return (
    <section className="contact-info pt-50 pb-70">
      <div className="container">
        <div className="row">
          {contactInfo.map((info, index) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
              <div className="contact-info-box">
                <h4 className="contact__info-box-title">{info.office}</h4>
                <ul className="contact__info-list list-unstyled">
                  <li>
                    Email: <a href={`mailto:${info.email}`}>{info.email}</a>
                  </li>
                  <li>Address: {info.address}</li>
                  <li>
                    Phone:{" "}
                    <a href={`tel:${info.phone.replace(/\s/g, "")}`}>
                      {info.phone}
                    </a>
                  </li>
                  <li>Hours: {info.hours}</li>
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
