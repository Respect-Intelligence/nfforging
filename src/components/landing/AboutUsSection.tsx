import "@/app/scss/sections/aboutus.scss";

export default function AboutUsSection() {
  return (
    <>
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about-left-image pe-4">
                <img
                  src="https://sailo-next.vercel.app/images/ab-1.jpg"
                  alt=""
                />
                <div className="ab-2">
                  <img
                    src="https://sailo-next.vercel.app/images/ab-2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className=" ps-4">
                <div className="heading-layout2">
                  <p className="heading__subtitle">About Company</p>
                  <h2 className="heading__title">
                    Engineering Excellence Built Over Time
                  </h2>
                </div>
                <div className="content">
                  {/* <h2>About Company</h2>
                <h3>We Are Solving All of Your Business Problem</h3> */}
                  <p>
                    A quarter century ago, our founding father Mr. Murari Lal
                    Dhanuka planted the seeds of what would grow into the LAL
                    BABA group — a name now synonymous with reliability and
                    innovation in the engineering sector. As the flagship of the
                    group, NF Forgings Private Limited has established itself as
                    a market leader in Foundry, Forming, and Fabrication. Our
                    journey from humble beginnings to industry leadership is
                    rooted in a commitment to quality and long-term vision.
                  </p>
                  <p>
                    At NF, we believe that while machines build products, people
                    build trust. Over the years, we've invested heavily in
                    assembling a highly skilled, experienced, and passionate
                    team dedicated to excellence. With a strong focus on
                    delivering robust engineering solutions, our people-first
                    approach continues to drive our growth and success in
                    serving global industries.
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
