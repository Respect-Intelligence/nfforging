import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCarosoul from "./BlogCarosoul";
import { query } from "@/utils/db";
import { Blog } from "@/assets/static/types";
// import { Navigation } from 'swiper/modules';

const blogPosts = [
  {
    imgSrc: "https://nfforging.com/images/blog-img1.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "blog",
  },
  {
    imgSrc: "https://nfforging.com/images/blog-img2.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "blog",
  },
  {
    imgSrc: "https://nfforging.com/images/blog-img3.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "blog",
  },
  {
    imgSrc: "https://nfforging.com/images/blog-img3.jpg",
    date: "August 11, 2021",
    title: "Providing Robust Engineering Solutions",
    description:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group",
    link: "blog",
  },
];
async function fetchBlogs(): Promise<Blog[]> {
  const results = await query<Blog>(
    `SELECT title, intro, blog_image, published_date, slug, category, tags
     FROM blogs
     WHERE published_status = 1
     ORDER BY published_date DESC
     LIMIT 6`
  );
  console.log(results);
  return results;
  // Convert to frontend format
  // return results.map((blog) => ({
  //   title: blog.title,
  //   description: blog.intro,
  //   imgSrc: blog.blog_image,
  //   date: blog.published_date,
  //   link: `/blog/${blog.slug}`,
  // }));
}
const BlogSection = async () => {
  let blogs: null | Blog[] = null;
  try {
    blogs = await fetchBlogs();
    console.log("blogs", blogs);
  } catch (error) {
    console.log(error, "err");
  }

  return (
    <section className="blog-carousel pb-0 z-index-2 pt-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="heading heading-layout3 mb-40">
              <h2 className="heading__title">Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 ">
            <div className="position-relative">
              {blogs && (
                <div className="carousel-nav-wrapper">
                  <button className="carousel-nav-arrow carousel-nav-prev ">
                    <ArrowLeft />
                    <span>Prev</span>
                  </button>
                  <button className="carousel-nav-arrow carousel-nav-next">
                    <ArrowRight />
                  </button>
                </div>
              )}
              {/* <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
              >
                Previous
              </button> */}
              {blogs ? (
                <BlogCarosoul blogPosts={blogs} />
              ) : (
                <p>No Blogs Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
