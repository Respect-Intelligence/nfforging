import { count } from "console";
import Image from "next/image";
import img1 from "@/assets/images/features/svg/1.svg";
import img2 from "@/assets/images/features/svg/2.svg";
import img3 from "@/assets/images/features/svg/3.svg";
import img4 from "@/assets/images/features/svg/4.svg";

export default function HighlightSection() {
  let highlightsData = [
    {
      img: img1,
      count: 500,
      title: "Successfully",
      subTitle: "completed projects",
    },
    {
      img: img2,
      count: 500,
      title: "Successfully",
      subTitle: "completed projects",
    },
    {
      img: img3,
      count: 500,
      title: "Successfully",
      subTitle: "completed projects",
    },
    {
      img: img4,
      count: 500,
      title: "Successfully",
      subTitle: "completed projects",
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
                  <Image src={img} alt="completed projects" priority={false} />
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
