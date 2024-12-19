// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation'; // Import useRouter
// import Link from 'next/link';
// const page = () => {
//   const [data, setData] = useState([]);
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const propertyResponse = await axios.get(`https://api.propertyease.in/api/pro/fetchPropertyData`);
//         console.log(propertyResponse.data);
//         setData(propertyResponse.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   // Click handler to navigate to another page
//   const handleItemClick = (itemId) => {
//     // Assuming you want to navigate to a page like /property/[id]
//     router.push(`/test/${itemId}`); // Change this path as needed
//   };

//   return (
//     <div>
//       <div>
//         {data.map((item) => (
//           <div key={item.pro_url} 
//           //onClick={() => handleItemClick(item.pro_url)} 
//           style={{ cursor: 'pointer' }}>
//            <Link href={`/test/${item.pro_url}`}>{item.pro_url}</Link> 
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;







// import axios from 'axios';
// import Link from 'next/link';

// export default async function Page() {
//   let data = [];

//   try {
//     const propertyResponse = await axios.get(`https://api.propertyease.in/api/pro/fetchPropertyData`);
//     data = propertyResponse.data;
//   } catch (error) {
//     console.error('Error fetching property data:', error);
//     data = []; 
//   }

//   return (
//     <div>
//       <div>
//         {data.length === 0 ? (
//           <p>No properties found</p>  // Handle case where data is empty
//         ) : (
//           data.map((item) => (
//             <div key={item.pro_url} style={{ cursor: 'pointer' }}>
//               <Link href={`/test/${item.pro_url}`}>{item.pro_url}</Link>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


// import axios from "axios";


// export default async function Page() {
//     //const response = await axios.get('https://api.propertyease.in/api/pro/fetchPropertyData');
//     //const data = await response.data;
//     // let data1 = await fetch('https://api.propertyease.in/api/pro/fetchPropertyData')
//     // let data = await data1.json()
//     let data = await fetch('https://api.vercel.app/blog')
//     let posts = await data.json()
  
//     return (
//       // <div>
//       //   {/* Render data here */}
//       //   {data.map((item) => (
//       //     <p key={item.id}>{item.name}</p>
//       //   ))}
//       // </div>
//       <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//     );
//   }




// import { unstable_cache } from 'next/cache'
// import Link from 'next/link'
 
// const getPosts = unstable_cache(
//   async () => {
//     let data = await fetch('https://api.vercel.app/blog')
//     let posts = await data.json()
//     return posts;
//   },
//   ['posts'],
//   { revalidate: 3600, tags: ['posts'] }
// )
 
// export default async function Page() {
//   const allPosts = await getPosts()
//  console.log("allPosts : " , allPosts);
//   return (
//     <ul>
//       {allPosts.map((post) => (
//         <li key={post.id}><Link href={`/test/${post.title}`}>{post.title}</Link> </li>
//       ))}
//     </ul>
//   )
// }




import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import pool from "../libs/mysql";
import Link from "next/link";
import { getExperts } from "@/lib/api";

const getData = async (currentPage) => {
  //try {
    // const db = await pool;
    // const query =
    //   "SELECT * from experts LEFT JOIN expert_subjects ON experts.SubjectID = expert_subjects.sid WHERE experts.id > ? limit 12";
    // const q = "SELECT COUNT(*) as total from experts";

    // const [rows] = await db.query(query, (currentPage - 1) * 12);
    // const [total] = await db.query(q);
    // return { data: rows, total: total };
  // } catch (error) {
  //   return error;
  // }
  return await getExperts(currentPage);
};

const Page = async ({ searchParams }) => {
  const currentPage = searchParams["page"] || 1;
  const res = await getData(currentPage);
  // console.log(res);
  const recordsPerPage = 12;
  const nPages = Math.ceil(res.total[0].total / recordsPerPage);

  return (
    <div>
      <Header />
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] pb-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Hire Our
              <span className="bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500 text-transparent">
                &nbsp;Experts
              </span>
            </h1>
          </div>

          <div></div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              This is the expert section of examhelp , if you want any help do
              contact us here and hire any freelance experts available widely.
            </p>
          </div>
        </div>
      </div>
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        <div className="text-center pb-12">
          <h2 className="text-xl font-bold text-indigo-500">
            Having Highest Rating
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 ">
            Check our awesome team members
          </h1>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
          {/* <Card /> */}
          {res.data.map((item, index) => (
            <div class="max-w-3xl w-full mx-auto z-10" key={index}>
              <div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                <div class="flex-none sm:flex gap-3">
                  
                  <div class="flex flex-col">
                   
                          <div class="w-full flex-none text-lg text-gray-800 font-bold leading-none">
                            {item.Name}
                          </div>
                          <div class="flex-auto text-gray-500 my-1">
                            <span class="mr-3 capitalize">{item.Title}</span>
                         
                    </div>
                   
                    <div class="flex pt-2  text-sm text-gray-500">
                      <Link
                        href={`/test/${
                          item.Name.toLowerCase().replaceAll(" ", "-") +
                          "-" +
                          item.id
                        }`}
                        className="shadow shadow-blue-600 text-blue-600 py-1 px-2 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
                      >
                        Hire Expert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div
        className="flex justify-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center
                     text-gray-900 uppercase align-middle transition-all rounded-full select-none
                      disabled:pointer-events-none 
                      disabled:opacity-50 disabled:shadow-none"
      >
       
      </div>

      <Footer />
    </div>
  );
};

export default Page;
