import Image from "next/image";
import Link from "next/link";

export default function Section_6() {
  return (
    <section className="about-layout2">
      <div className="container-fluid">
        <div className="row">
          <div className="text-block">
            <div className="heading-layout2 mb-30">
              <span className="heading__subtitle">
                Leading The Way In Building And Civil Construction
              </span>
              <h2 className="heading__title">
                Bigger, Better, Faster And Stronger Projects Than Ever!!
              </h2>
              <p className="heading__desc mb-30 mt-40">
                Yet those that embrace change are thriving, building bigger,
                better, faster, and stronger products than ever before. You are
                helping to lead the charge; we can help you build on your past
                and prepare future.
              </p>
              <p className="heading__desc">
                The world is changing faster than ever before, Promina
                industries are threatened as technology disrupts and software.
              </p>
            </div>

            <ul className="list-items list-unstyled mb-40">
              <li>Quality Control System</li>
              <li>Unrivalled workmanship</li>
              <li>100% Satisfaction Guarantee</li>
              <li>Accurate Testing Processes</li>
              <li>Highly Professional Staff</li>
              <li>Professional and Qualified</li>
            </ul>

            <Link
              href="/projects-grid"
              className="btn btn__secondary btn__icon"
            >
              <span>Latest Projects</span>
              <i className="icon-arrow-right"></i>
            </Link>
          </div>

          <div className="imgs-block mt-50">
            <div className="about__img">
              <Image
                src="/images/about/2.png"
                alt="about"
                className="img-fluid w-100"
                width={600}
                height={400}
              />
            </div>

            <div className="video__box">
              <a
                className="video__btn video__btn-white popup-video"
                href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="video__player">
                  <span className="video__player-animation"></span>
                  <span className="video__player-animation video__player-animation-2"></span>
                  <i className="fa fa-play"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
