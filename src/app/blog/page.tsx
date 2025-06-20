import { Blog, blogImageBaseURL } from "@/assets/static/types";
import BasicTopBanner from "@/components/BasicTopBanner";
import { getdateToStr } from "@/utils/CommonFuntion";
import { query } from "@/utils/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type BlogQueryParams = Partial<Blog> & {
  page?: number;
  limit?: number;
};

type BlogQueryResult = {
  blogs: Blog[];
  total: number;
};

export async function getBlogs(
  params: BlogQueryParams
): Promise<BlogQueryResult> {
  const { page = 1, limit = 9, ...filters } = params;
  console.log("params", filters);

  const offset = (page - 1) * limit;
  const whereClauses: string[] = [];
  const values: any[] = [];

  // Keys for exact match
  const exactMatchKeys = new Set(["id", "slug", "category", "published_by"]);

  // Keys for LIKE match
  const likeKeys = new Set(["title", "tags"]);

  // Special handling for date fields
  const dateKeys = new Set(["published_date", "modified_date"]);

  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null || value === "") continue;

    if (exactMatchKeys.has(key)) {
      whereClauses.push(`${key} = ?`);
      values.push(value);
    } else if (likeKeys.has(key)) {
      whereClauses.push(`${key} LIKE ?`);
      values.push(`%${value}%`);
    } else if (dateKeys.has(key)) {
      whereClauses.push(`DATE(${key}) = DATE(?)`);
      values.push(value);
    }
  }

  const whereSQL = whereClauses.length
    ? `WHERE ${whereClauses.join(" AND ")}`
    : "";

  const blogs = await query<Blog>(
    `SELECT * FROM blogs ${whereSQL} ORDER BY published_date DESC LIMIT ? OFFSET ?`,
    [...values, limit, offset]
  );

  const totalResult = await query<{ count: number }>(
    `SELECT COUNT(*) AS count FROM blogs ${whereSQL}`,
    values
  );

  return {
    blogs,
    total: totalResult[0]?.count || 0,
  };
}

// export async function fetchRecentBlogs({
//   category,
// }: {
//   category: string | undefined;
// }): Promise<Blog[] | null> {
//   try {
//     const results = await query<Blog>(
//       `
//     SELECT * FROM blogs
//     ${category ? "WHERE category = ?" : ""}
//     ORDER BY published_date DESC LIMIT 10
//   `,
//       category ? [category] : []
//     );
//     console.log(results);
//     return results;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

type pageProps = {
  searchParams: {
    category?: string;
    tags?: string;
    slug?: string;
    title?: string;
    published_by?: string;
  };
};
async function page({ searchParams }: pageProps) {
  const category = searchParams.category;
  const blogs = await getBlogs(searchParams);
  console.log("blogs", blogs);

  return (
    <>
      <BasicTopBanner title="Blogs" bannerImgSrc="/images/blog/banner.webp" />

      <section className="blog-listing">
        <div className="container">
          <div className="row">
            {blogs?.blogs?.map(
              (
                { title, slug, intro, category, published_date, blog_image },
                index: number
              ) => {
                return (
                  <div key={index} className="col-md-6 col-lg-4 mb-4">
                    <div
                      className="blog-item mb-0 h-100 slick-slide slick-cloned  d-flex flex-column"
                      data-slick-index="-3"
                      id=""
                      aria-hidden="true"
                      //   style="width: 357px;"
                      tabIndex={-1}
                    >
                      <div className="blog__img">
                        <a href={`/blog/${slug}`} tabIndex={-1}>
                          <img
                            src={`${blogImageBaseURL}${blog_image}`}
                            alt={title}
                          />
                        </a>
                      </div>
                      <div className="blog__content flex-grow-1 d-flex flex-column justify-content-between">
                        <div className="top">
                          <div className="blog__meta">
                            <div className="blog__meta-cat">
                              <a
                                href={`/blog?category=${category}`}
                                tabIndex={-1}
                              >
                                {category}
                              </a>
                            </div>
                          </div>
                          <h4 className="blog__title">
                            <a href={`/blog/${slug}`} tabIndex={-1}>
                              {title}
                            </a>
                          </h4>
                          <span className="blog__meta-date">
                            {getdateToStr(published_date)}
                          </span>
                          <p className="blog__desc truncate-2-lines">{intro}</p>
                        </div>
                        <Link
                          href={`/blog/${slug}`}
                          className="btn btn__secondary btn__link"
                          tabIndex={-1}
                        >
                          <span>Read More</span>
                          <span className="icon_svg">
                            <ArrowRight />
                          </span>
                        </Link>
                      </div>
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

export default page;
