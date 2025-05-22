import React from "react";

function Faq() {
  const faqs = [
    {
      title: "Which Plan Is Right For Me?",
      content:
        "Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.",
      id: "collapse1",
    },
    {
      title: "Do I have to commit to a contract?",
      content:
        "Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.",
      id: "collapse2",
    },
    {
      title: "What Payment Methods Are Available?",
      content:
        "Fully responsive, retina ready & created for all types of devices. York makes sure your website looks equally breathtaking when viewed on all screen resolutions.",
      id: "collapse3",
      open: true,
    },
  ];
  return (
    <>
      <h5 className="fz-25 mt-20">Key Benifits</h5>
      <div id="accordion" className="mb-60">
        {faqs.map((faq, index) => (
          <div
            className={`accordion-item${faq.open ? " opened" : ""}`}
            key={index}
          >
            <div
              className="accordion__item-header"
              data-toggle="collapse"
              data-target={`#${faq.id}`}
            >
              <a className="accordion__item-title" href="#">
                {faq.title}
              </a>
            </div>
            <div
              id={faq.id}
              className={`collapse${faq.open ? " show" : ""}`}
              data-parent="#accordion"
            >
              <div className="accordion__item-body">
                <p>{faq.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
