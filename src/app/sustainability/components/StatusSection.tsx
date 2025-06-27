import React from "react";
import "@/scss/sections/statusSection.scss";

function StatusSection() {
  // const statusArr = [
  //   {
  //     title: "Step 1: Define Your Role",
  //     status: "Identify Risk Zones",
  //     para: "Entire the Risk Zone & define your Role",
  //     image: "/images/sustainability/step1.jpg",
  //   },
  //   {
  //     title: "Step 2: Clarify Value",
  //     status: "Effective Communication",
  //     para: "Communicate & Clarify value",
  //     image: "/images/sustainability/step2.jpg",
  //   },
  //   {
  //     title: "Step 3: Time Awareness",
  //     status: "Self Assessment",
  //     para: "Analyze your use of TIME",
  //     image: "/images/sustainability/step3.jpg",
  //   },
  //   {
  //     title: "Step 4: Prioritize & Plan",
  //     status: "Goal Setting",
  //     para: "Allocate time according to the Priorities & set your Goal",
  //     image: "/images/sustainability/step4.jpg",
  //   },
  //   {
  //     title: "Step 5: Stay Organized",
  //     status: "Task Management",
  //     para: "Maintain a 'TO DO LIST'",
  //     image: "/images/sustainability/step5.jpg",
  //   },
  //   {
  //     title: "Step 6: Follow Through",
  //     status: "Execution",
  //     para: "Have a Follow Through",
  //     image: "/images/sustainability/step6.jpg",
  //   },
  //   {
  //     title: "Step 7: Delegate Wisely",
  //     status: "Smart Delegation",
  //     para: "Delegate low Priority items",
  //     image: "/images/sustainability/step7.jpg",
  //   },
  // ];
  const statusArr = [
    {
      title: "Environmental Responsibility",
      status: "Preserve Natural Resources",
      para: "Minimize ecological impact and conserve resources.",
      image: "/images/sustainability/1.jpg",
    },
    {
      title: "Social Equity",
      status: "Empower Communities",
      para: "Support inclusive growth and fair practices.",
      image: "/images/sustainability/social.jpg",
    },
    {
      title: "Economic Viability",
      status: "Build Long-Term Value",
      para: "Ensure growth without harming the environment.",
      image: "/images/sustainability/eco.jpg",
    },
    {
      title: "Innovation for Impact",
      status: "Drive Sustainable Solutions",
      para: "Use technology to create eco-friendly solutions.",
      image: "/images/sustainability/step4.jpg",
    },
  ];

  return (
    <>
      <section className="statusSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="heading text-center mb-50" data-aos="fade-down">
                <span className="heading__subtitle">
                  Our Action To Gain Longevity
                </span>
                <h2 className="heading__title">Weaving a Sustainable Future</h2>
              </div>
            </div>
            {statusArr.map((item, index) => {
              return (
                <div
                  className="col-12 col-lg-6 statusItem-wrapper mb-2 mb-md-4 "
                  key={index}
                  data-aos="fade-right"
                >
                  <div className="statusItem">
                    <div className="img-wraper">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="statusItem_content">
                      <p>{item.title}</p>
                      <h4>{item.status}</h4>
                      <p>{item.para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default StatusSection;
