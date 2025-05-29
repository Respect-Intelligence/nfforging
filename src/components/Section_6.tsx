import { ArrowRight, Check, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Section_6() {
  return (
    <section className="about-layout2 " id="aboutCompany">
      <div className="container-fluid">
        <div className="row">
          <div className="text-block">
            <div className="heading-layout2 mb-30">
              <span className="heading__subtitle">
                Driven by Innovation, Built on Legacy
              </span>
              <h2 className="heading__title">
                NF Forging Excellence Since 1997
              </h2>
              <p className="heading__desc mb-30 mt-40">
                NF Forgings Pvt. Ltd., the flagship of the esteemed LAL BABA
                Group, has been a name synonymous with quality and innovation in
                the steel engineering industry since 1997
              </p>
              <p className="heading__desc">
                Founded by Mr. Murari Lal Dhanuka, the company began as a humble
                venture and has evolved into a multi-division enterprise leading
                in Cold Rolled Formed Sections, Foundry, and Fabrication. At NF
                Forgings, we believe that machines are only as good as the
                people behind them — which is why we’ve invested in building a
                highly skilled and experienced team committed to delivering
                engineering excellence across industries.
              </p>
            </div>

            <ul className="list-items list-unstyled mb-40">
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Legacy of Over 25 Years
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Diverse Divisions: CRF, Foundry, Fabrication
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Skilled and Experienced Workforce
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                NABL-Accredited Laboratory
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Advanced Infrastructure at Multiple Units
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Expertise in Critical Engineering Assignments
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                ISO, RDSO & BIS Certified
              </li>
              <li>
                <span className="checkIcon">
                  <Check />
                </span>{" "}
                Mission-Driven Technological Growth
              </li>
            </ul>

            <Link
              href="/projects-grid"
              className="btn btn__secondary btn__icon"
            >
              <span>Latest Projects</span>
              <ArrowRight height={18} />
            </Link>
          </div>

          <div className="imgs-block pe-0 mt-50">
            <div className="about__img h-100">
              <img
                src="/images/about/2.jpg"
                alt="about"
                className="img-fluid  w-auto h-100"
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
                  <Play strokeWidth={2.25} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
