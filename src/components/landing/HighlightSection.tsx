import { count } from "console";
import Image from "next/image";
import img1 from "@/assets/images/features/svg/1.svg";
import img2 from "@/assets/images/features/svg/2.svg";
import img3 from "@/assets/images/features/svg/3.svg";
import img4 from "@/assets/images/features/svg/4.svg";

export default function HighlightSection() {
  let highlightsData = [
    {
      img: "/images/highlights/employment.png",
      count: 25,
      title: "Experiance",
      subTitle: "Years of Experiance",
    },
    {
      img: "/images/highlights/project-management.png",
      count: 68,
      title: "Projects",
      subTitle: "Projects per Year",
    },
    {
      img: "/images/highlights/boxes.png",
      count: "23K",
      title: "Products",
      subTitle: "Products per Month",
    },
    {
      img: "/images/highlights/client.png",
      count: 500,
      title: "Clients",
      subTitle: "Satisfied Clients",
    },
  ];
  return (
    <>
      <section className="wpo-feature-section">
        <div className="wraper">
          {highlightsData.map(({ img, title, subTitle, count }, index) => {
            return (
              <div className="item" key={index}>
                <div className="icon">
                  {/* <Image src={img} alt="completed projects" priority={false} /> */}
                  <img src={img} alt={title} />
                </div>
                <div className="content">
                  <h2>
                    <span className="odometer" data-count={`${count}`}>
                      {count}
                    </span>
                    +
                  </h2>
                  <h3>{title}</h3>
                  <span>{subTitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
