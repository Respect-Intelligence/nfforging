import "@/scss/sections/aboutus.scss";

export default function AboutUsSection() {
  return (
    <>
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="row align-items-start flex-row-reverse">
            <div className="col-lg-6 col-12">
              <div className="about-left-image d-none d-md-block">
                <div className="img-wraper">
                  <img src="/images/home3/ab-1.jpg.png" alt="" />
                </div>
                {/* <div className="ab-2">
                  <img
                    src="https://sailo-next.vercel.app/images/ab-2.jpg"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-12 pe-4">
              <div className="">
                <div className="heading-layout2">
                  <p className="heading__subtitle">About Company</p>
                  <h2 className="heading__title">
                    Engineering Excellence Built Over Time
                  </h2>
                </div>
                <div className="content">
                  {/* <h2>About Company</h2>
                <h3>We Are Solving All of Your Business Problem</h3> */}
                  <p className="text-justify">
                    NF Forgings Private Limited (NFFPL) is a flagship company
                    commanding market leadership in FOUNDRY, FORMING, and
                    FABRICATION.
                  </p>
                  <p className="text-justify">
                    Money can buy machines but at NF, we have always believed
                    that the men behind the machine are more important. Apart
                    from machines, over the past few decades, we have heavily
                    invested into and nurtured an able, experienced and
                    qualified team to help us achieve the highest levels of
                    excellence.
                  </p>
                  {/* <p className="text-justify">
                    NFFPL is a ‘Total Solutions’ engineering company providing
                    design, engineering, procurement, construction and
                    integrated project management services from ‘Concept to
                    Commissioning’ with highest quality and safety standards
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-end ">
            <div className="col-lg-6 col-12">
              <div className="about-left-image ">
                <div className="img-wraper">
                  <img src="/images/home3/ab-2.png" alt="" />
                </div>
                {/* <div className="ab-2">
                  <img
                    src="https://sailo-next.vercel.app/images/ab-2.jpg"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className=" ">
                <div className="content">
                  <p className="text-justify">
                    NFFPL is a ‘Total Solutions’ engineering company providing
                    design, engineering, procurement, construction and
                    integrated project management services from ‘Concept to
                    Commissioning’ with highest quality and safety standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
