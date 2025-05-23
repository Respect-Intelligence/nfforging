import React from "react";
import "@/scss/sections/statusSection.scss";

function StatusSection() {
  const statusArr = [
    {
      title: "Hindalco",
      status: "100 Mn",
      para: "Children immunised with polio, BCG, DPT & Hepatitis-B vaccines",
      image: "/images/features/3.jpg",
    },
    {
      title: "Hindalco",
      status: "100 Mn",
      para: "Children immunised with polio, BCG, DPT & Hepatitis-B vaccines",
      image: "/images/features/2.jpg",
    },
  ];
  return (
    <>
      <section className="statusSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center mb-50">
                <span className="heading__subtitle">
                  The Best A Grade Commercial &amp; Residential Services
                </span>
                <h2 className="heading__title">
                  High Quality Construction Solutions For Residentials &amp;
                  Industries!
                </h2>
              </div>
            </div>
            {statusArr.map((item, index) => {
              return (
                <div className="col-12 col-lg-6 statusItem-wrapper" key={index}>
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
