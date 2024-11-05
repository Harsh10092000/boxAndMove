
// import { getAllPosts, getPostBySlug } from "@/lib/api";
// import markdownToHtml from "@/lib/markdowntohtml";
// import React from "react";
// import Header from "src/app/components/Header";
// import Footer from "src/app/components/Footer";
// //import "./markdownstyling.css";
// import "./markdownstyling.css";
// //import { IconChevronDown } from "@tabler/icons-react";

// export function generateMetadata({ params }) {
//   const post = getPostBySlug(params.slug);

//   if (!post) {
//     return notFound();
//   }

//   const title = post.title;

//   return {
//     title,
//     description: post.description,
//     openGraph: {
//       title: post.ogtitle,
//     },
//   };
// }

// const Page = async ({ params }) => {
//   const post = getPostBySlug(params.slug);

//   const content = await markdownToHtml(post.content || "");
//   const faq = post.faq;
//   return (
//     <>
//       <Header />
//       <div class="max-w-screen-lg mx-auto">
//         <main class="mt-10">
//           <div class="mb-4 md:mb-0 w-full mx-auto relative">
//             <div class="px-4 lg:px-0">
//               <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
//                 {post.title}
//               </h2>
//               <a
//                 href="#"
//                 class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
//               >
//                 {post.category}
//               </a>
//             </div>

//             {/* <img
//               src={post.coverImage}
//               class="md:w-[70%] max-h-[400px] object-cover lg:rounded w-full"
//             /> */}
//           </div>

//           <div class="flex flex-col lg:flex-row lg:space-x-12">
//             <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
//               <div
//                 className="markdown py-4"
//                 dangerouslySetInnerHTML={{ __html: content }}
//               />
//             </div>
//             <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
//               <div class="p-4 border-t border-b md:border md:rounded">
//                 <div class="flex py-2">
//                   <img
//                     src={post.coverImage}
//                     class="h-10 w-10 rounded-full mr-2 object-cover"
//                   />
//                   <div>
//                     <p class="font-semibold text-gray-700 text-sm">
//                       {" "}
//                       {post.author}{" "}
//                     </p>
//                     <p class="font-semibold text-gray-600 text-xs"> Editor </p>
//                   </div>
//                 </div>
//                 <p class="text-gray-700 py-3">{post.description}</p>
//               </div>
//             </div>
//           </div>
//         </main>
//         <div className="py-10 px-5 ">
//           <div className="flex flex-col items-center">
//             <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
//             <p className="text-neutral-500 text-xl mt-3">
//               Frequenty Asked Questions
//             </p>
//           </div>
//           <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
//             {faq?.map((item, index) => (
//               <div className="py-5 w-full" key={index}>
//                 <details className="group">
//                   <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
//                     <span>{item.question}</span>
//                     <span className="transition group-open:rotate-180">
//                       {/* <IconChevronDown /> */}
//                       icon
//                     </span>
//                   </summary>
//                   <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
//                     {item.answer}
//                   </p>
//                 </details>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;










import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdowntohtml";
import React from "react";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
//import "./markdownstyling.css";
import "./markdownstyling.css";
//import { IconChevronDown } from "@tabler/icons-react";

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
    description: post.description,
    openGraph: {
      title: post.ogtitle,
    },
  };
}

const Page = async ({ params }) => {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");
  const faq = post.faq;
  return (
    <>
      <Header />

      <div class="pbmit-title-bar-wrapper">
			<div class="container">
				<div class="pbmit-title-bar-content">
					<div class="pbmit-title-bar-content-inner">
						<div class="pbmit-tbar">
							<div class="pbmit-tbar-inner container">
								<h1 class="pbmit-tbar-title">Blog</h1>
							</div>
						</div>
						<div class="pbmit-breadcrumb">
							<div class="pbmit-breadcrumb-inner">
								<span><a title="" href="#" class="home"><span>MoversCO</span></a></span>
								
								<span class="sep">-</span> 
								<span><span class="post-root post post-post current-item">{post.category}</span></span>
								<span class="sep">-</span>
								<span>
									<span class="post-root post post-post current-item">{post.title}</span>
								</span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>



    <section>
    <div class="container">
        <div class="row">
            <div class="col-lg-9 blog-right-col">
                <div class="row">
                    <div class="col-md-12">
                        <article class="post blog-details"> 
                            <div class="blog-classic">    
                                <div class="pbmit-featured-img-wrapper">
                                    <div class="pbmit-featured-wrapper">
                                        <a href="blog-single-view.html">
                                        <picture><img src="../images/homepage-1/blog/blog-02.jpg" class="img-fluid w-100" alt="" /></picture>
                                        </a>
                                    </div>
                                </div>
                                <div class="pbmit-blog-classic-inner">
                                    <div class="pbmit-blog-meta-wrapper">
                                        <div class="pbmit-meta pbmit-meta-cat">
                                            <div class="pbmit-blog-classic-dbox-date">18</div>
                                            <div class="pbmit-blog-classic-dbox-month">Feb</div>
                                        </div>
                                        <h3 class="pbmit-post-title">
                                            <a href="blog-single-view.html">{post.title}</a> 
                                        </h3>
                                        <div class="pbmit-blog-meta pbmit-blog-meta-top">
                                            <span class="pbmit-meta pbmit-meta-date">
                                                <a href="blog-single-view.html" rel="bookmark">
                                                    <span class="entry-date published">{post.category}</span>
                                                </a>
                                            </span>
                                            <span class="pbmit-author-name">
                                                <span>By </span>
                                                <a href="blog-large-image.html" title="Posted by admin" rel="author">{post.author}</a>
                                            </span>
                                            <span class="pbmit-meta pbmit-meta-comments">{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pbmit-entry-content">
                                <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
                                    
                                </div>
                            </div>
                            <div class="pbmit-blog-meta pbmit-blog-meta-bottom">
                                <div class="pbmit-blog-meta-bottom-left">
                                    <span class="pbmit-meta pbmit-meta-tags">
                                        <a href="#" rel="tag">Relocation</a>
                                        <a href="#" rel="tag">Transports</a>
                                    </span>
                                </div>
                                <div class="pbmit-blog-meta-bottom-right">
                                    <div class="pbmit-social-share-title">Share this post</div>
                                    <div class="pbmit-social-share">
                                        <ul>
                                            <li class="pbmit-social-li pbmit-social-li-facebook">
                                                <a class="pbmit-popup" href="#">
                                                    <i class="pbmit-base-icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="pbmit-social-li pbmit-social-li-twitter">
                                                <a class="pbmit-popup" href="#">
                                                    <i class="pbmit-base-icon-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="pbmit-social-li pbmit-social-li-tumblr">
                                                <a class="pbmit-popup" href="#">
                                                    <i class="pbmit-base-icon-pinterest"></i>
                                                </a>
                                            </li>
                                            <li class="pbmit-social-li pbmit-social-li-pinterest">
                                                <a class="pbmit-popup" href="#" >
                                                    <i class="pbmit-base-icon-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </article> 
                       
                    </div> 
                </div>
            </div>
            <div class="col-lg-3 blog-left-col blog-details">
                <aside class="sidebar">
                    <aside class="widget widget-search">
                        <form class="search-form">
                            <input type="search" class="search-field" placeholder="Search …" value=""/>
                            <a href="#"><i class="fa fa-search"></i></a>
                        </form>
                    </aside>
                    <aside class="widget widget-categories">
                        <h3 class="widget-title">Categories</h3>
                        <ul>
                            <li><a href="blog-large-image.html">Household Moving</a><span>2</span></li>
                            <li><a href="blog-large-image.html">International Moving</a><span>4</span></li>
                            <li><a href="blog-large-image.html">Relocation Moving</a><span>2</span></li>
                            <li><a href="blog-large-image.html">Transports Takecare</a><span>2</span></li>
                        </ul>
                    </aside>
                    <aside class="widget widget-recent-post">
                        <h2 class="widget-title">Recent posts</h2>
                        <ul class="recent-post-list">
                            <li class="recent-post-list-li"> 
                                <a class="recent-post-thum" href="#">
                                <img src="../images/homepage-1/recent-post/blog-01.jpg" class="img-fluid" alt=""/>
                                </a>
                                <div class="media-body">
                                <a href="blog-single-view.html">Our Home Entertainment has Evolved Significantly</a>
                                <span class="post-date">August 8, 2018</span>
                                </div> 
                            </li>
                            <li class="recent-post-list-li"> 
                                <a class="recent-post-thum" href="#">
                                <img src="../images/homepage-1/recent-post/blog-02.jpg" class="img-fluid" alt=""/>
                                </a>
                                <div class="media-body">
                                <a href="blog-single-view.html">These Are The Voyages of The Starship Enterprise</a>
                                <span class="post-date">February 18, 2018</span>
                                </div> 
                            </li>
                            <li class="recent-post-list-li"> 
                                <a class="recent-post-thum" href="#">
                                <img src="../images/homepage-1/recent-post/blog-03.jpg" class="img-fluid" alt=""/>
                                </a>
                                <div class="media-body">
                                <a href="blog-single-view.html">Three Reasons Visibility Matters in Supply Chain</a>
                                <span class="post-date">January 21, 2018</span>
                                </div> 
                            </li>
                            <li class="recent-post-list-li"> 
                                <a class="recent-post-thum" href="#">
                                <img src="../images/homepage-1/recent-post/blog-04.jpg" class="img-fluid" alt=""/>
                                </a>
                                <div class="media-body">
                                <a href="blog-single-view.html">Its Mission Explore Strange to the New Worlds</a>
                                <span class="post-date">September 29, 2017</span>
                                </div> 
                            </li>
                        </ul>
                    </aside>
                    <aside class="widget widget-tag-cloud">
                        <h3 class="widget-title">Tags</h3>
                        <div class="tagcloud">
                            <a href="blog-large-image.html" class="tag-cloud-link">Household</a>
                            <a href="blog-large-image.html" class="tag-cloud-link">International</a>
                            <a href="blog-large-image.html" class="tag-cloud-link">Relocation</a>
                            <a href="blog-large-image.html" class="tag-cloud-link">Transports</a>
                        </div>
                    </aside>   
                </aside>
            </div>
        </div>
    </div>
</section>


      {/* <div class="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
                {post.title}
              </h2>
              <a
                href="#"
                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {post.category}
              </a>
            </div>

            
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div class="p-4 border-t border-b md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src={post.coverImage}
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-700 text-sm">
                      {" "}
                      {post.author}{" "}
                    </p>
                    <p class="font-semibold text-gray-600 text-xs"> Editor </p>
                  </div>
                </div>
                <p class="text-gray-700 py-3">{post.description}</p>
              </div>
            </div>
          </div>
        </main>
        <div className="py-10 px-5 ">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
            <p className="text-neutral-500 text-xl mt-3">
              Frequenty Asked Questions
            </p>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
            {faq?.map((item, index) => (
              <div className="py-5 w-full" key={index}>
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                    
                      icon
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {item.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Page;
