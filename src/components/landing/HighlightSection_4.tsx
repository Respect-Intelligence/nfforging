import { highlightsData } from "@/assets/static/data";
import React from "react";
import "@/scss/sections/highlightSection_3.scss";

function HighlightSection_4() {
  return (
    // <section className="highlightSection_4">
    //   <div className="container">
    <div className="highlightSection_4">
      <div className="wraper">
        {highlightsData?.map(({ icon, title, description, value }, index) => {
          return (
            <div className="item" key={index}>
              <div className="content">
                <h2>
                  {value} {title}
                </h2>
                <p>{description}</p>
              </div>
              <div className="icon">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8378 27C10.3878 27 10.0878 26.85 9.78777 26.55C9.18777 25.95 9.18777 25.05 9.78777 24.45L24.7878 9.45C25.3878 8.85 26.2878 8.85 26.8878 9.45C27.4878 10.05 27.4878 10.95 26.8878 11.55L11.8878 26.55C11.5878 26.85 11.2878 27 10.8378 27Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.8378 25.5C24.9378 25.5 24.3378 24.9 24.3378 24V12H12.3378C11.4378 12 10.8378 11.4 10.8378 10.5C10.8378 9.6 11.4378 9 12.3378 9H25.8378C26.7378 9 27.3378 9.6 27.3378 10.5V24C27.3378 24.9 26.7378 25.5 25.8378 25.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // </section>
  );
}

export default HighlightSection_4;
