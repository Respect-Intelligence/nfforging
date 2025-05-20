import React from "react";

function ProjectsGrid() {
  const portfolioItems = [
    {
      title: "The Fallingwater House",
      image: "/images/portfolio/grid/1.jpg",
      categories: ["Building", "Interior"],
    },
    {
      title: "The Guggenheim Museum",
      image: "/images/portfolio/grid/2.jpg",
      categories: ["Construction", "Engineering"],
    },
    {
      title: "Neue National Galerie",
      image: "/images/portfolio/grid/3.jpg",
      categories: ["Renovation", "Architecture"],
    },
    {
      title: "Sagrada Familia",
      image: "/images/portfolio/grid/4.jpg",
      categories: ["Construstion", "Cuilding"],
    },
    {
      title: "Neue National Galerie",
      image: "/images/portfolio/grid/1.jpg",
      categories: ["construction"],
      hidden: true,
    },
    {
      title: "Villy Manufacturing Inc",
      image: "/images/portfolio/grid/3.jpg",
      categories: ["Engineering", "Auto"],
      hidden: true,
    },
  ];
  return (
    <>
      <h5 className="mb-40">
        A leading developer of A grade commercial, industrial and residential
        projects in USA. Since foundation we doubled turnover year on year, with
        its staff numbers swelling accordingly.
      </h5>

      <div className="portfolio-grid-layout2">
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`col-sm-6 col-md-6 col-lg-6 ${
                item.hidden ? "portfolio-hidden" : ""
              }`}
            >
              <div className="portfolio-item">
                <div className="portfolio__img">
                  <img src={item.image} alt="portfolio img" />
                </div>
                <div className="portfolio__content">
                  <h4 className="portfolio__title">
                    <a href="#">{item.title}</a>
                  </h4>
                  <div className="portfolio__cat">
                    {item.categories.map((cat, i) => (
                      <a key={i} href="#">
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mb-60">
            <button
              type="button"
              className="btn btn__link btn__loadMore loadMoreportfolio"
            >
              <span>More Projects</span>
              <i>+</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsGrid;
