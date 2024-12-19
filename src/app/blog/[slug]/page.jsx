// import { getAllPosts, getPostBySlug, getCategoryList, getRecentPosts } from "@/lib/api";
// import markdownToHtml from "@/lib/markdowntohtml";
// import React from "react";
// import Header from "src/app/components/Header";
// import Footer from "src/app/components/Footer";
// import "./markdownstyling.css";
// import Link from "next/link";
// import moment from "moment";
// import { DateFormatter, GetDay, GetMonth } from "helperFunctions/DateFun";





// export async function generateMetadata({ params }) {
//   const {slug} = await params;
//   const post = getPostBySlug(slug);
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

//   const {slug} = await params;
//   const GetCatUrl = (str) => {
//     return str
//     .split(' ')           
//     .map(word => word.charAt(0).toLowerCase() + word.slice(1)) 
//     .join('-');   
//   }

//   const post = getPostBySlug(slug);

//   const categoryList = getCategoryList();
//   const recentPosts =  getRecentPosts(slug);


//   const content = await markdownToHtml(post.content || "");
//   const faq = post.faq;
//   return (
//     <>
//       <Header />

//       <div className="pbmit-title-bar-wrapper">
// 			<div className="container">
// 				<div className="pbmit-title-bar-content">
// 					<div className="pbmit-title-bar-content-inner">
// 						<div className="pbmit-tbar">
// 							<div className="pbmit-tbar-inner container">
// 								<h1 className="pbmit-tbar-title">Blog</h1>
// 							</div>
// 						</div>
// 						<div className="pbmit-breadcrumb">
// 							<div className="pbmit-breadcrumb-inner">
// 								<span><a title="" href="#" className="home"><span>MoversCO</span></a></span>
								
// 								<span className="sep">-</span> 
// 								<span><span className="post-root post post-post current-item">{post.category}</span></span>
// 								<span className="sep">-</span>
// 								<span>
// 									<span className="post-root post post-post current-item">{post.title}</span>
// 								</span>
// 							</div>
// 						</div>
// 					</div>
// 				</div> 
// 			</div> 
// 		</div>



//     <section>
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-9 blog-right-col">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <article className="post blog-details"> 
//                             <div className="blog-classic">    
//                                 <div className="pbmit-featured-img-wrapper">
//                                     <div className="pbmit-featured-wrapper">
//                                         {/* <a href="blog-single-view.html"> */}
//                                         <picture><img src={post.coverImage} className="img-fluid w-100" alt="" /></picture>
//                                         {/* </a> */}
//                                     </div>
//                                 </div>
//                                 <div className="pbmit-blog-classic-inner">
//                                     <div className="pbmit-blog-meta-wrapper">
//                                         <div className="pbmit-meta pbmit-meta-cat">
//                                             <div className="pbmit-blog-classic-dbox-date">{GetDay({ date: post.date })}</div>
//                                             <div className="pbmit-blog-classic-dbox-month">{GetMonth({ date: post.date })}</div>
//                                         </div>
//                                         <h3 className="pbmit-post-title">
//                                             <a href="blog-single-view.html">{post.title}</a> 
//                                         </h3>
//                                         <div className="pbmit-blog-meta pbmit-blog-meta-top">
//                                             <span className="pbmit-meta pbmit-meta-date">
//                                                 <Link href={`/blog/category/${post.catSlug}`} rel="bookmark">
//                                                     <span className="entry-date published">{post.category}</span>
//                                                 </Link>
//                                             </span>
//                                             <span className="pbmit-author-name">
//                                                 <span>By {post.author}</span>
                                               
//                                             </span>
//                                             <span className="pbmit-meta pbmit-meta-comments">{DateFormatter({date: post.date})}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="pbmit-entry-content">
//                                 <div
//                 className="markdown py-4"
//                 dangerouslySetInnerHTML={{ __html: content }}
//               />
                                    
//                                 </div>
//                             </div>
//                             <div className="pbmit-blog-meta pbmit-blog-meta-bottom">
//                                 <div className="pbmit-blog-meta-bottom-left">
//                                     <span className="pbmit-meta pbmit-meta-tags">
//                                         <a href="#" rel="tag">Relocation</a>
//                                         <a href="#" rel="tag">Transports</a>
//                                     </span>
//                                 </div>
//                                 <div className="pbmit-blog-meta-bottom-right">
//                                     <div className="pbmit-social-share-title">Share this post</div>
//                                     <div className="pbmit-social-share">
//                                         <ul>
//                                             <li className="pbmit-social-li pbmit-social-li-facebook">
//                                                 <a className="pbmit-popup" href="#">
//                                                     <i className="pbmit-base-icon-facebook"></i>
//                                                 </a>
//                                             </li>
//                                             <li className="pbmit-social-li pbmit-social-li-twitter">
//                                                 <a className="pbmit-popup" href="#">
//                                                     <i className="pbmit-base-icon-twitter"></i>
//                                                 </a>
//                                             </li>
//                                             <li className="pbmit-social-li pbmit-social-li-tumblr">
//                                                 <a className="pbmit-popup" href="#">
//                                                     <i className="pbmit-base-icon-pinterest"></i>
//                                                 </a>
//                                             </li>
//                                             <li className="pbmit-social-li pbmit-social-li-pinterest">
//                                                 <a className="pbmit-popup" href="#" >
//                                                     <i className="pbmit-base-icon-linkedin"></i>
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div> 
//                                 </div>
//                             </div>
//                         </article> 
                       
//                     </div> 
//                 </div>
//             </div>
//             <div className="col-lg-3 blog-left-col blog-details">
//                 <aside className="sidebar">
//                     {/* <aside className="widget widget-search">
//                         <form className="search-form">
//                             <input type="search" className="search-field" placeholder="Search …" value=""/>
//                             <a href="#"><i className="fa fa-search"></i></a>
//                         </form>
//                     </aside> */}
//                     <aside className="widget widget-categories">
//                         <h3 className="widget-title">Categories</h3>
//                         <ul>
//                           {categoryList.map((item, index) => (
//                              <li key={index}><Link href={`/blog/category/${GetCatUrl(item)}`}>{item}</Link>
//                              {/* <span>2</span> */}
//                              </li>
//                           ))}

//                             {/* <li><a href="blog-large-image.html">Household Moving</a><span>2</span></li>
//                             <li><a href="blog-large-image.html">International Moving</a><span>4</span></li>
//                             <li><a href="blog-large-image.html">Relocation Moving</a><span>2</span></li>
//                             <li><a href="blog-large-image.html">Transports Takecare</a><span>2</span></li> */}
//                         </ul>
//                     </aside>
//                     <aside className="widget widget-recent-post">
//                         <h2 className="widget-title">Recent posts</h2>
//                         <ul className="recent-post-list">
//                           {recentPosts.map((item, index) => (
//                             <li key={index} className="recent-post-list-li"> 
//                                 <Link className="recent-post-thum" href={item.slug}>
//                                 <img src={item.coverImage} className="img-fluid" alt=""/>
//                                 </Link>
//                                 <div className="media-body">
//                                 <Link href={item.slug}>{item.title}</Link>
//                                 <span className="post-date">{DateFormatter({date: item.date})}</span>
//                                 </div> 
//                             </li>
//                           ))}
                            
                         
//                         </ul>
//                     </aside>
//                     <aside className="widget widget-tag-cloud">
//                         <h3 className="widget-title">Tags</h3>
//                         <div className="tagcloud">
//                             <a href="blog-large-image.html" className="tag-cloud-link">Household</a>
//                             <a href="blog-large-image.html" className="tag-cloud-link">International</a>
//                             <a href="blog-large-image.html" className="tag-cloud-link">Relocation</a>
//                             <a href="blog-large-image.html" className="tag-cloud-link">Transports</a>
//                         </div>
//                     </aside>   
//                 </aside>
//             </div>
//         </div>
//     </div>
// </section>


//       {/* <div className="max-w-screen-lg mx-auto">
//         <main className="mt-10">
//           <div className="mb-4 md:mb-0 w-full mx-auto relative">
//             <div className="px-4 lg:px-0">
//               <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
//                 {post.title}
//               </h2>
//               <a
//                 href="#"
//                 className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
//               >
//                 {post.category}
//               </a>
//             </div>

            
//           </div>

//           <div className="flex flex-col lg:flex-row lg:space-x-12">
//             <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
//               <div
//                 className="markdown py-4"
//                 dangerouslySetInnerHTML={{ __html: content }}
//               />
//             </div>
//             <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
//               <div className="p-4 border-t border-b md:border md:rounded">
//                 <div className="flex py-2">
//                   <img
//                     src={post.coverImage}
//                     className="h-10 w-10 rounded-full mr-2 object-cover"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-700 text-sm">
//                       {" "}
//                       {post.author}{" "}
//                     </p>
//                     <p className="font-semibold text-gray-600 text-xs"> Editor </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 py-3">{post.description}</p>
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
//       </div> */}
//       <Footer />
//     </>
//   );
// };

// export default Page;




import "./markdownstyling.css";
import Link from "next/link";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import { DateFormatter, GetDay, GetMonth } from "helperFunctions/DateFun";
//import markdownToHtml from "@/lib/markdowntohtml";
import { fetchGraphCategories, fetchGraphRecentPosts, fetchSinglePost } from "@/lib/graphapi";



export async function generateMetadata({ params }, parent) {
  // Fetch the post data using the slug from params
  const res = await fetchSinglePost(params.slug);

  // Function to generate JSON-LD for product
  function addProductJsonLd(post) {
    return {
      __html: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": post.title,
        "image": [
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg"
        ],
        "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
        "sku": "0446310786",
        "mpn": "925872",
        "brand": {
          "@type": "Brand",
          "name": "ACME"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Fred Benson"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "89"
        },
        "offers": {
          "@type": "Offer",
          "url": `https://box-and-move.vercel.app/blog/${post.slug}`, // Use a full URL
          "priceCurrency": "USD",
          "price": "119.99",
          "priceValidUntil": "2020-11-20",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock"
        }
      }),
    };
  }

  // Return metadata for the page
  return {
    title: res.title,
    description: res.excerpt || "Default description for the page.", // Fallback description if excerpt is not available
    openGraph: {
      title: res.title,
      description: res.excerpt || "Description for the Open Graph",
      images: [res.featuredImage ? res.featuredImage.sourceUrl : '/default-image.jpg'], // Full URL to image
    },
    jsonLd: {
      __html: addProductJsonLd(res).__html,
    },
  };
}

 



const getData = async (params) => {
    try {
      const res = await fetchSinglePost(params.slug);
      
      //const post = await getPostBySlug(params?.slug);
      if (!res) {
        return {
          notFound: true,
        };
      }
      return res;
    } catch (error) {
      return error;
    }
  };
  

const PostPage = async ({ params }) => {
    const post = await getData(params);
    const catList = await fetchGraphCategories();
    const recentPosts = await fetchGraphRecentPosts();

 

    return (
    <>
    
      <Header />

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
								<span><a title="" href="#" className="home"><span>MoversCO</span></a></span>
								
								<span className="sep">-</span> 
								<span><span className="post-root post post-post current-item">
                  {/* {post.category} */}
                 Category
                  </span></span>
								<span className="sep">-</span>
								<span>
									<span className="post-root post post-post current-item">{post.title}</span>
								</span>
							</div>
						</div>
					</div>
				</div> 
			</div> 
		</div>



    <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-9 blog-right-col">
                <div className="row">
                    <div className="col-md-12">
                        <article className="post blog-details"> 
                            <div className="blog-classic">    
                                <div className="pbmit-featured-img-wrapper">
                                    <div className="pbmit-featured-wrapper">
                                        {/* <a href="blog-single-view.html"> */}
                                        <picture><img src={post.featuredImage.node.sourceUrl} className="img-fluid w-100" alt="" /></picture>
                                        {/* </a> */}
                                    </div>
                                </div>
                                <div className="pbmit-blog-classic-inner">
                                    <div className="pbmit-blog-meta-wrapper">
                                        <div className="pbmit-meta pbmit-meta-cat">
                                            <div className="pbmit-blog-classic-dbox-date">{GetDay({ date: post.date })}</div>
                                            <div className="pbmit-blog-classic-dbox-month">{GetMonth({ date: post.date })}</div>
                                        </div>
                                        <h3 className="pbmit-post-title">
                                            <a href="blog-single-view.html">{post.title}</a> 
                                        </h3>
                                        <div className="pbmit-blog-meta pbmit-blog-meta-top">
                                            <span className="pbmit-meta pbmit-meta-date">
                                                <Link href=
                                                // {`/blog/category/${post.catSlug}`}
                                                {`/blog/category/${post.categories.edges[0].node.slug}`}
                                                 rel="bookmark">
                                                    <span className="entry-date published">
                                                    {post.categories.edges[0].node.name}
                                                      
                                                      </span>
                                                </Link>
                                            </span>
                                            <span className="pbmit-author-name">
                                                <span>By {post.author.node.name}</span>
                                               
                                            </span>
                                            <span className="pbmit-meta pbmit-meta-comments">{DateFormatter({date: post.date})}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pbmit-entry-content">
                                <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
                                    
                                </div>
                            </div>
                            <div className="pbmit-blog-meta pbmit-blog-meta-bottom">
                                <div className="pbmit-blog-meta-bottom-left">
                                    <span className="pbmit-meta pbmit-meta-tags">
                                        <a href="#" rel="tag">Relocation</a>
                                        <a href="#" rel="tag">Transports</a>
                                    </span>
                                </div>
                                <div className="pbmit-blog-meta-bottom-right">
                                    <div className="pbmit-social-share-title">Share this post</div>
                                    <div className="pbmit-social-share">
                                        <ul>
                                            <li className="pbmit-social-li pbmit-social-li-facebook">
                                                <a className="pbmit-popup" href="#">
                                                    <i className="pbmit-base-icon-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="pbmit-social-li pbmit-social-li-twitter">
                                                <a className="pbmit-popup" href="#">
                                                    <i className="pbmit-base-icon-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="pbmit-social-li pbmit-social-li-tumblr">
                                                <a className="pbmit-popup" href="#">
                                                    <i className="pbmit-base-icon-pinterest"></i>
                                                </a>
                                            </li>
                                            <li className="pbmit-social-li pbmit-social-li-pinterest">
                                                <a className="pbmit-popup" href="#" >
                                                    <i className="pbmit-base-icon-linkedin"></i>
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
            <div className="col-lg-3 blog-left-col blog-details">
                <aside className="sidebar">
                    {/* <aside className="widget widget-search">
                        <form className="search-form">
                            <input type="search" className="search-field" placeholder="Search …" value=""/>
                            <a href="#"><i className="fa fa-search"></i></a>
                        </form>
                    </aside> */}
                    <aside className="widget widget-categories">
                        <h3 className="widget-title">Categories</h3>
                        <ul>
                          {catList?.map((item, index) => (
                             <li key={index}><Link href=
                             {`/blog/category/${item.node.slug}`}
                            
                             >{item.node.name}</Link>
 
                             </li>
                          ))}

                            {/* <li><a href="blog-large-image.html">Household Moving</a><span>2</span></li>
                            <li><a href="blog-large-image.html">International Moving</a><span>4</span></li>
                            <li><a href="blog-large-image.html">Relocation Moving</a><span>2</span></li>
                            <li><a href="blog-large-image.html">Transports Takecare</a><span>2</span></li> */}
                        </ul>
                    </aside>
                    <aside className="widget widget-recent-post">
                        <h2 className="widget-title">Recent posts</h2>
                        <ul className="recent-post-list">
                          {recentPosts.nodes?.map((item, index) => (
                            <li key={index} className="recent-post-list-li"> 
                                <Link className="recent-post-thum" href={item.slug}>
                                <img src={item.featuredImage?.node.sourceUrl} className="img-fluid" alt=""/>
                                </Link>
                                <div className="media-body">
                                <Link href={item.slug}>{item.title}</Link>
                                <span className="post-date">{DateFormatter({date: item.date})}</span>
                                </div> 
                            </li>
                          ))}
                            
                         
                        </ul>
                    </aside>
                    <aside className="widget widget-tag-cloud">
                        <h3 className="widget-title">Tags</h3>
                        <div className="tagcloud">
                            <a href="blog-large-image.html" className="tag-cloud-link">Household</a>
                            <a href="blog-large-image.html" className="tag-cloud-link">International</a>
                            <a href="blog-large-image.html" className="tag-cloud-link">Relocation</a>
                            <a href="blog-large-image.html" className="tag-cloud-link">Transports</a>
                        </div>
                    </aside>   
                </aside>
            </div>
        </div>
    </div>
</section>


      {/* <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {post.title}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {post.category}
              </a>
            </div>

            
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <img
                    src={post.coverImage}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      {post.author}{" "}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                  </div>
                </div>
                <p className="text-gray-700 py-3">{post.description}</p>
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

export default PostPage;
