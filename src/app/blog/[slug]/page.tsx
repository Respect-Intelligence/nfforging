import Link from "next/link";
import React from "react";
import "@/scss/sections/blog.scss";
import RecentPost from "../RecentPost";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import { query } from "@/utils/db";
import { Blog, blogImageBaseURL } from "@/assets/static/types";
import { notFound } from "next/navigation";
import { fetchRecentBlogs, getdateToStr } from "@/utils/CommonFuntion";
import Content from "./Content";

async function fetchBlogs(slug: string): Promise<Blog[] | null> {
  try {
    const results = await query<Blog>("SELECT * FROM blogs WHERE slug = ?", [
      slug,
    ]);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function page({ params }: { params: { slug: string } }) {
  const blogs = await fetchBlogs(params.slug);
  if (blogs == null) {
    notFound();
  }
  const recentBlogs = await fetchRecentBlogs();
  console.log(recentBlogs);

  const {
    title,
    intro,
    content,
    tags,
    category,
    blog_image,
    blog_image_alt,
    id,
    slug,
    published_by,
    published_date,
  } = blogs[0];
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
                    {title}
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
                        <Search />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="widget widget-posts">
                  <h5 className="widget__title">Recent Posts</h5>
                  <div className="widget__content">
                    <RecentPost recentBlogs={recentBlogs} />
                  </div>
                </div>

                <div className="widget widget-tags">
                  <h5 className="widget__title">Tags</h5>
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      {tags
                        ? tags?.split(",").map((tag, i) => {
                            return (
                              <li key={i} className=" pe-2">
                                <a href={`/blog?tag=${tag}`}>{tag}</a>
                              </li>
                            );
                          })
                        : " No Tags Given"}
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
                      src={`${blogImageBaseURL}${blog_image}`}
                      alt="blog image"
                    />
                  </a>
                </div>
                <div className="blog__content">
                  <div className="blog__meta d-flex align-items-center">
                    <div className="blog__meta-cat">
                      <a href={`/blog?category=${category}`}>{category}</a>
                    </div>
                    <span className="blog__meta-author">
                      By: <a href="#">{published_by}</a>
                    </span>
                    <span className="blog__meta-date">
                      {getdateToStr(published_date)}
                    </span>
                  </div>
                  <h1 className="blog__title">{title}</h1>
                  {content && (
                    <div
                      dangerouslySetInnerHTML={{ __html: content }}
                      className="blog__desc"
                    />
                  )}
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

              <div className="blog-tags d-flex ">
                <strong className="mr-20 color-heading">Tags:</strong>
                <ul className="list-unstyled d-flex flex-wrap mb-40">
                  {tags?.split(",").map((tag, i) => {
                    return (
                      <li key={i} className=" pe-2">
                        <a href={`/blog?tag=${tag}`}>{tag}</a>
                      </li>
                    );
                  })}
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
