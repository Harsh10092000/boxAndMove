import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts , getCategoryList } from "@/lib/api";
import React from "react";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import Providers from "../progressBarprovider";
export const dynamic = "force-dynamic";


const getData = async (currentPage) => {
    try {
      const res = await fetch(`https://statanalytica.com/blog/wp-json/wp/v2/posts?per_page=10&page=${currentPage}`);
      const post = await res.json();
      return post;
    } catch (error) {
      return error;
    }
  };


const page = async ({ searchParams }) => {
    
 //const post = getAllPosts();
 const currentPage = searchParams["page"] || 1;
 const post = await getData(currentPage);

 //const res = await fetch('https://statanalytica.com/blog/wp-json/wp/v2/posts?per_page=10&page=2');
  //const post = await res.json();

  //console.log("post : " , post);
  //const post = await getData();
  //console.table(post);

  // export function getPostsByCategory(category) {
  //   const allPosts = getAllPosts();
  //   return allPosts.filter((post) => post.category === category);
  // }
;
  return (
    <Providers>
    <div>
      <Header/>
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
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        
          
        </div>
      </section>

      <div className="page-content">

<section className="blog-grid section-md">
    <div className="container">
        <div className="row">

        {/* {post.map((item, index) => (
           <BlogCard item={item} key={index} />
           ))} */}
           {post.map((item) => (
          <li key={item.id}>{item.title.rendered}</li>
        ))}
        </div>
    </div>
</section>

<Pagination />
</div>

      <Footer/>
    </div>
    </Providers>
  );
};

export default page;

















