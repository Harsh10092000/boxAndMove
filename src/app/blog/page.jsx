import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

import React from "react";

const page = () => {
  const post = getAllPosts();

  console.log("post.category : " , post.category);
  
  
  // export function getPostsByCategory(category) {
  //   const allPosts = getAllPosts();
  //   return allPosts.filter((post) => post.category === category);
  // }

  const morePost = post.slice(1);
  return (
    <div>
      <Header/>
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Blog Grid View</h1>
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
                      Blog Grid View
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
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* <Link
            href={`/blog/${post[0].slug}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={post[0].coverImage}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {" "}
                {post[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(post[0].date).toDateString()}
              </span>
              <p> {post[0].description}</p>
            </div>
          </Link> */}
          {/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {post.map((item, index) => (
              <Link
                href={`/blog/${item.slug}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                key={index}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={item.coverImage}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {" "}
                    {item.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {" "}
                    {new Date(item.date).toDateString()}
                  </span>
                  <p> {item.description}</p>
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </section>

      <div className="page-content">   

<section className="blog-grid section-md">
    <div className="container">
        <div className="row">

        {post.map((item, index) => (
            <div className="col-md-6 col-lg-4">
             
                <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                    <div className="post-item">
                        <div className="pbminfotech-blog-image-with-meta">
                            <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                              <Link href={`/blog/${item.slug}`}>  <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture></Link>
                            </div>
                            <div className="pbminfotech-meta-date">{new Date(item.date).toDateString()}</div>
                        </div>
                        <div className="pbminfotech-box-content">
                            <div className="pbminfotech-box-title">
                                <h4><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            </div>
                            <div className="pbmit-blogbox-readmore">
                                <div className="pbminfotech-blogbox-footer-left">
                                    <Link  href={`/blog/${item.slug}`}>Read More</Link>
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


</div>

      <Footer/>
    </div>
  );
};

export default page;
