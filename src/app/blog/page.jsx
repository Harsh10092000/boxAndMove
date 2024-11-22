import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts , getCategoryList } from "@/lib/api";
import Link from "next/link";
import moment from "moment";
import React from "react";
import BlogCard from "../components/BlogCard";

export const dynamic = "force-dynamic";

const dateFormatter = (date) => {
  return moment(date).format("MMMM D, YYYY");
}

const page = async () => {
 const post = getAllPosts();
  //const post = await getData();
  //console.table(post);

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
           <BlogCard item={item} key={index} />
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

//import { getAllPosts, getRecentPosts } from "@/lib/api";
//import Link from "next/link";


// Define static parameters and revalidation interval for ISR

// export async function generateStaticParams() {
//   // Generate paths for static pages (all the blog posts)
//   const posts = getAllPosts();
//   return posts.map((post) => ({
//     slug: post.slug, // `slug` here is used to generate a dynamic route
//   }));
// }



// Test 2



// export async function generateStaticProps() {
//   // Fetch all posts
//   const posts = getAllPosts();

//   // Return posts as props
//   return {
//     props: {
//       posts,
//     },
//   };
// }


// //export const revalidate = 60; // Set revalidation interval (in seconds)

// // Server Component that renders the blog list
// export default async function Blog({ posts }) {
//   // Fetching all posts from markdown files
//   //const posts = getAllPosts();
//   const recentPosts = getRecentPosts("holiday-homework-now");
//   return (
//     <div>
//       <h1>All Blogs</h1>
//       {/* {posts ? ( */}
//         <ul>
//           {posts?.map((post) => (
//             <li key={post.slug}>
//               <Link href={`/blog/${post.slug}`}>
//                 <a>{post.slug}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       {/* ) : (
//         <p>No posts available.</p>
//       )} */}

//       <div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>
//       <div>
//         <h1>recent post sluf</h1>
//         {recentPosts.map((item, index) => (
//           <div>{item.slug}</div>
//         ))}
//       </div>
//     </div>
//   );
// 



// app/blog/page.js

//import { getAllPosts, getRecentPosts } from "@/lib/api"; // Assuming these functions are defined in your lib/api.js
//import Link from "next/link";

// `generateStaticProps` fetches data at build time
// export async function generateStaticProps() {
//   // Fetch all posts
//   const posts = getAllPosts(); // Ensure that this function returns the correct data
//   console.log("posts inside static prop function : " , posts);
//   // Return posts as props for the page
//   return {
//     props: {
//       posts,
//     },
//     // Optional: Set revalidation interval (ISR) if you want the page to be updated after a certain period
//     revalidate: 60, // Revalidate every 60 seconds
//   };
// }


// export async function generateStaticParams() {
//   const posts = await getAllPosts()
//   //return posts;
//   console.log("posts inside static prop function : " , posts);
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }


// export default async function Page({ params  }) {
//   const recentPosts = getRecentPosts("holiday-homework-now");
//   const { slug } = await params;
//   return (
//     <div>
//       <h1>All Blogs 1</h1>
//       {/* Render the list of posts */}
//       <ul>
//         {/* {posts?.map((post) => (
//           <li key={post.slug}>
//             <Link href={`/blog/${post.slug}`}>
//               <a>{post.slug}</a>
//             </Link>
//           </li>
//         ))} */}
//       </ul>

//       {/* Divider */}
//       <div>
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//       </div>

//       {/* Render recent posts */}
//       <div>
//         <h1>Recent Posts</h1>
//         {recentPosts?.map((item, index) => (
//           <div key={index}>{item.slug}</div>
//         ))}
//       </div>
//     </div>
//   );
// }





// "use server"

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { getAllPosts, getCategoryList } from "@/lib/api";
// import Link from "next/link";
// import moment from "moment";
// import React from "react";
// import BlogCard from "../components/BlogCard";

// export const revalidate = 60;
// // Format the date using moment.js
// const dateFormatter = (date) => {
//   return moment(date).format("MMMM D, YYYY");
// };

// // Server-side function to fetch blog posts and categories
// const getData = async () => {
//   const posts = await getAllPosts();
//   const categories = await getCategoryList();
//   return { posts, categories };
// };

// const Page = async () => {
//   // Fetch data from the server
//   const { posts, categories } = await getData();

//   return (
//     <div>
//       <Header />
//       {/* Title Bar */}
//       <section className="dark:bg-gray-100 dark:text-gray-800">
//         <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
//       <div className="pbmit-title-bar-wrapper">
//         <div className="container">
//           <div className="pbmit-title-bar-content">
//             <div className="pbmit-title-bar-content-inner">
//               <div className="pbmit-tbar">
//                 <div className="pbmit-tbar-inner container">
//                   <h1 className="pbmit-tbar-title">Blog</h1>
//                 </div>
//               </div>
//               <div className="pbmit-breadcrumb">
//                 <div className="pbmit-breadcrumb-inner">
//                   <span>
//                     <a title="" href="#" className="home">
//                       <span>MoversCO</span>
//                     </a>
//                   </span>
//                   <span className="sep">-</span>
//                   <span>
//                     <span className="post-root post post-post current-item">
//                       Blog
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       </section>
//       {/* Title Bar End */}

//       <section className="dark:bg-gray-100 dark:text-gray-800">
//         <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
//           {/* Blog posts display */}
//           <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {posts.map((item, index) => (
//               <Link
//                 href={`/blog/${item.slug}`}
//                 className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
//                 key={index}
//               >
//                 <img
//                   role="presentation"
//                   className="object-cover w-full rounded h-44 dark:bg-gray-500"
//                   src={item.coverImage}
//                 />
//                 <div className="p-6 space-y-2">
//                   <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
//                     {item.title}
//                   </h3>
//                   <span className="text-xs dark:text-gray-600">
//                     {dateFormatter(item.date)}
//                   </span>
//                   <p>{item.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="page-content">
//         <section className="blog-grid section-md">
//           <div className="container">
//             <div className="row">
//               {/* BlogCard component rendering */}
//               {posts.map((item, index) => (
//                 <BlogCard item={item} key={index} />
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Page;


// // app/blog/page.js
// import { getAllPosts, getCategoryList } from "@/lib/api";
// import Link from "next/link";
// import moment from "moment";

// // Revalidate the page every 60 seconds
// export const dynamic = "force-dynamic";
// export const revalidate = 60;

// const dateFormatter = (date) => moment(date).format("MMMM D, YYYY");

// const BlogPage = async () => {
//   // Fetch data from your API or database
//   const posts = await getAllPosts();
//   const categories = await getCategoryList();

//   console.table("posts : " , posts);

//   return (
//     <div>
//       <h1>Blog</h1>
//       <section>
//         <div className="container">
//           <div className="grid">
//             {posts.map((item, index) => (
//               <Link href={`/blog/${item.slug}`} key={index}>
//                 <div className="blog-card">
//                   <img src={item.coverImage} alt={item.title} />
//                   <h3>{item.title}</h3>
//                   <span>{dateFormatter(item.date)}</span>
//                   <p>{item.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogPage;
