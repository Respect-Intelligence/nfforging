import Link from "next/link";
import React from "react";
import "@/scss/sections/blog.scss";
import RecentPost from "./RecentPost";
import { Facebook, Instagram, Twitter } from "lucide-react";

function page() {
  return (
    <>
      <section className="page-title page-title-layout8 text-center blog-page-title">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <nav>
                <ol className="breadcrumb justify-content-center mb-20">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link> {">"}
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog">Blog</Link> {">"}
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Importance of specialized focus in Projects, Oil &amp; Gas
                    Logistic
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="blog blog-single pt-0 pb-40">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar mb-30">
                <div className="widget widget-search">
                  <h5 className="widget__title">Search</h5>
                  <div className="widget__content">
                    <form className="widget__form-search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button className="btn" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="widget widget-posts">
                  <h5 className="widget__title">Recent Posts</h5>
                  <div className="widget__content">
                    <RecentPost />
                  </div>
                </div>

                <div className="widget widget-tags">
                  <h5 className="widget__title">Tags</h5>
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Insights</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Modern</a>
                      </li>
                      <li>
                        <a href="#">Corporate</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            {/* Blog Content */}
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="blog-item mb-0">
                <div className="blog__img">
                  <a href="#">
                    <img
                      src="/images/home3/heroBanner_2.png"
                      alt="blog image"
                    />
                  </a>
                </div>
                <div className="blog__content">
                  <div className="blog__meta d-flex align-items-center">
                    <div className="blog__meta-cat">
                      <a href="#">Engineering</a>
                      <a href="#">Distribution</a>
                    </div>
                    <span className="blog__meta-author">
                      By: <a href="#">Mike Dooley</a>
                    </span>
                    <span className="blog__meta-date">Jan 20, 2020</span>
                  </div>
                  <h1 className="blog__title">
                    Importance of specialized focus in Projects, Oil &amp; Gas
                    Logistics?
                  </h1>
                  <div className="blog__desc">
                    <p>
                      The key to the success of any logistics contract is good
                      logistics management. The key to good management is the
                      ability to identify the needs of the client and the
                      countries in which the work will take place, as well as
                      being in a position to advise the best way forward. In
                      today’s international and remote locations, experience and
                      understanding of logistics operations and local networks
                      is vital. With the many years of experience in our team,
                      we have a detailed understanding of the criticality or
                      every aspect of the logistics world.
                    </p>
                    <p>
                      {" "}
                      Focus can provide logistics personnel to meet the needs of
                      your company or portfolio. From logistics managers to
                      warehousemen, logistics controllers to transport
                      coordinators, we can assist you. We provide personnel for
                      one-off portfolio as well as long or short-term agency
                      personnel, assist in the recruitment of permanent staff,
                      or we can manage your logistics department for you.
                    </p>
                    <p>
                      When travelling to a foreign country, most people are
                      nervous of the obstacles that will be there for them to
                      overcome. When a full marine crew travels en-mass to a
                      vessel mobilisation, it is imperative that they arrive on
                      time and safely, especially in a remote location.
                    </p>
                    <p>
                      Focus provides meet-and-greet facilities through our
                      network of specialist companies. From hotel reservations
                      and taxi arrangements to a full pick-up facility, with or
                      without armed guards, this can be arranged.
                    </p>
                    <p>
                      Ever had a last minute requirement for items to be in a
                      country where you do not have a visa to enter? Are you
                      frustrated at having to hand-carry important documents to
                      your client, which takes you out of the office for days?
                      Let Focus help you. Our personnel are available
                      24-hours-a-day for these important deliveries. This leaves
                      you free to concentrate on your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="blog-share d-flex flex-wrap gap-4 mb-30">
                <a href="#" className="btn  btn__facebook">
                  <Facebook
                    fill="#fff"
                    stroke="none"
                    height={18}
                    className="fillIcon"
                  />
                  <span>Share on Facebook</span>
                </a>
                <a href="#" className="btn  btn__twitter">
                  <Twitter
                    fill="#fff"
                    stroke="none"
                    height={18}
                    className="fillIcon"
                  />
                  <span>Share on Twitter</span>
                </a>
                <a href="#" className="btn  btn__google-plus">
                  <Instagram height={18} />
                  <span>Share on Instagram</span>
                </a>
              </div>

              <div className="blog-tags d-flex flex-wrap">
                <strong className="mr-20 color-heading">Tags:</strong>
                <ul className="list-unstyled d-flex flex-wrap mb-40">
                  <li>
                    <a href="#">Tiling</a>
                  </li>
                  <li>
                    <a href="#">Painting</a>
                  </li>
                  <li>
                    <a href="#">Construction</a>
                  </li>
                  <li>
                    <a href="#">Architecture</a>
                  </li>
                  <li>
                    <a href="#">Building</a>
                  </li>
                  <li>
                    <a href="#">Renovations</a>
                  </li>
                </ul>
              </div>

              <div className="blog-widget blog-nav mb-0">
                <div className="blog__prev">
                  <a href="#">
                    <div className="blog__nav-img">
                      <img src="/images/banner3.jpg" alt="blog thumb" />
                    </div>
                    <div className="blog__nav-content">
                      <span>Previous</span>
                      <h6>
                        Importers achieve cost savings through the First Sale
                        rule!
                      </h6>
                    </div>
                  </a>
                </div>
                <div className="blog__next">
                  <a href="#">
                    <div className="blog__nav-content">
                      <span>Next</span>
                      <h6>
                        Cargo flow through better supply chain visibility,
                        control.
                      </h6>
                    </div>
                    <div className="blog__nav-img">
                      <img src="/images/banner4.jpg" alt="blog thumb" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
