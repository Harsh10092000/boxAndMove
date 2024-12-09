import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts, getCategoryList } from "@/lib/api";
import React from "react";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Providers from "../progressBarprovider";
export const dynamic = "force-dynamic";
import { fetchGraphPosts } from "@/lib/graphapi";
import { GetDay, GetMonth } from "helperFunctions/DateFun";
import Link from "next/link";
const getData1 = async (currentPage) => {
  try {
    const res = await fetch(
      `https://statanalytica.com/blog/wp-json/wp/v2/posts?per_page=10&page=${currentPage}`
    );
    const post = await res.json();
    return post;
  } catch (error) {
    return error;
  }
};

const getData = async () => {
  try {
    const res = await fetchGraphPosts();

    return res;
  } catch (error) {
    return error;
  }
};

const page = async ({ searchParams }) => {
  //const post = getAllPosts();
  //const currentPage = searchParams["page"] || 1;
  //const post = await getData(currentPage);
  const post = await getData();
  //const post = await fetchGraphPosts();

  //const res = await fetch('https://statanalytica.com/blog/wp-json/wp/v2/posts?per_page=10&page=2');
  //const post = await res.json();

  //console.log("post : " , post);
  //const post = await getData();
  //console.table(post);

  // export function getPostsByCategory(category) {
  //   const allPosts = getAllPosts();
  //   return allPosts.filter((post) => post.category === category);
  // }
  return (
    <Providers>
      <div>
        <Header />
        {/* Title Bar */}
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title">Blog</h1>
                  </div>
                </div>
                <div className="pbmit-breadcrumb">
                  <div className="pbmit-breadcrumb-inner">
                    <span>
                      <a title="" href="#" className="home">
                        <span>MoversCO</span>
                      </a>
                    </span>
                    <span className="sep">-</span>
                    <span>
                      <span className="post-root post post-post current-item">
                        Blog
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Title Bar End  */}

        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"></div>
        </section>

        <div className="page-content">
          <section className="blog-grid section-md">
            <div className="container">
              <div className="row">
                {/* {post.map((item, index) => (
           <BlogCard item={item} key={index} />
           ))} */}
                {/* {post.map((item) => (
                  <ul className="py-2">
                    <li key={item.id}>{item.node.title}</li>
                    <li key={item.id}>{item.node.slug}</li>
                    <li key={item.id}>{item.node.date}</li>
                    <li key={item.id}>{item.node.author.node.name}</li>
                  </ul>
                ))} */}
                {post.map((item) => (
                  <div className="col-md-6 col-lg-4">
                    <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                      <div className="post-item">
                        <div className="pbminfotech-blog-image-with-meta">
                          <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                            <Link href={`/blog/${item.node.slug}`}>
                              {" "}
                              <picture>
                                <img
                                  src={item.node.featuredImage?.node.sourceUrl}
                                  className="img-fluid"
                                  alt=""
                                />
                              </picture>
                            </Link>
                          </div>
                          {/* <div className="pbminfotech-meta-date">{new Date(item.date).toDateString()}</div> */}
                          <div className="pbminfotech-meta-date">
                            <span>{GetMonth({ date: item.node.date })}</span>
                            {GetDay({ date: item.node.date })}
                          </div>
                        </div>

                        <div className="pbmit-blog-meta pbmit-blog-meta-top d-flex justify-content-between">
                          <span className="pbmit-meta pbmit-meta-date">
                            {item.node.categories.edges.map(({ node }) => (
                              <Link
                                key={node.slug}
                                href={`/blog/category/${node.slug}`}
                                rel="bookmark"
                              >
                                <span className="entry-date published">
                                  {node.name}
                                </span>
                              </Link>
                            ))}
                          </span>
                          <span className="pbmit-author-name">
                            <span>By {item.node.author.node.name}</span>
                            {/* <a href="blog-large-image.html" title="Posted by admin" rel="author">{item.author}</a> */}
                          </span>
                          {/* <span className="pbmit-meta pbmit-meta-comments">{dateFormatter(item.date)}</span> */}
                        </div>

                        <div className="pbminfotech-box-content">
                          <div className="pbminfotech-box-title">
                            <h4>
                              <Link href={`/blog/${item.node.slug}`}>
                                {item.node.title}
                              </Link>
                            </h4>
                          </div>
                          <div className="pbmit-blogbox-readmore">
                            <div className="pbminfotech-blogbox-footer-left">
                              <Link href={`/blog/${item.node.slug}`}>
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Pagination />
        </div>

        <Footer />
      </div>
    </Providers>
  );
};

export default page;
