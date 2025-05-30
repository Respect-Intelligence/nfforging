import { highlightsData } from "@/assets/static/data";
import { ArrowRight } from "lucide-react";
import "@/scss/sections/highlightSection_3.scss";
import React from "react";

function HighlightSection_3() {
  return (
    <>
      <section className="highlightSection_3">
        <div className="container">
          <div className="wraper">
            {highlightsData?.map(
              ({ icon, title, description, value }, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="icon">
                      <img src={`/images/home3/${icon}.png`} alt={title} />
                    </div>
                    <div className="content">
                      <h2>{value}</h2>
                      <h3>{title}</h3>
                      <p>{description}</p>

                      <a href="#" className="">
                        learn More
                        <span>
                          <ArrowRight height={18} />
                        </span>
                      </a>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HighlightSection_3;
