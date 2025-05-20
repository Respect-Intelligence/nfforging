import React from "react";

function Overview() {
  const fancyboxItems = [
    {
      icon: "icon-welding",
      title: "Powerfull Product<br> Strategy",
      desc: "Our facilities meet high security requirements and are certified to the highest local standards.",
    },
    {
      icon: "icon-checklist",
      title: "Award Winning <br>Projects",
      desc: "The world of international supply chains involves of unknown risks and challenging regulations.",
    },
    {
      icon: "icon-wrench5",
      title: "100% Satisfaction <br> Guarantee",
      desc: "Building relationships and projects that last. Serving an impressive clients.",
    },
  ];

  return (
    <>
      <div className="text__block mb-30">
        <h5 className="text__block-title">Overview</h5>
        <p className="text__block-desc">
          Our airfreight staff attaches great importance to customizing the
          booking process for our customers...
        </p>
      </div>

      <div className="fancybox-layout1">
        <div className="row">
          {fancyboxItems.map((item, index) => (
            <div key={index} className="col-sm-4 col-md-4 col-lg-4">
              <div className="fancybox-item">
                <div className="fancybox__icon">
                  <i className={item.icon}></i>
                </div>
                <div className="fancybox__content">
                  <h4
                    className="fancybox__title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="fancybox__desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Overview;
