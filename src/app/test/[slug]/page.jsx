// 'use client';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Head from 'next/head';

// const PropertyDetail = ({ params }) => {
//  // const { proid } = params;
//   const { slug } = params;
//   console.log("slug : " , slug);
//   // Ensure proid is defined before processing
//   if (!slug) {
//     return <div>Invalid Property ID</div>;
//   }

//   const arrproId = slug.split("-");
//   const proId1 = arrproId[arrproId.length - 1]; // Extract the last segment

//   const [propertyData, setPropertyData] = useState(null); // Use null to check for loading state
//   const [loading, setLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchPropertyData = async () => {
//       try {
//         const response = await axios.get(`https://api.propertyease.in/api/pro/fetchPropertyDataById/${proId1}`);
//         setPropertyData(response.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//       }
//     };

//     fetchPropertyData();
//   }, [proId1]); // Ensure the effect runs when proId1 changes

//   if (loading) return <div>Loading...</div>; // Show loading indicator while fetching data
//   if (!propertyData) return <div>No property data found.</div>; // Handle case where no data is returned

//   // Assuming propertyData is an array, get the first item for the meta tags
//   const { pro_url, pro_id } = propertyData[0];

//   return (
//     <>
//       <Head>
//         <title>{pro_url} - My Website</title>
//         <meta property="og:title" content={pro_url} />
//         <meta property="og:title" content="propertyease" />
//         <meta property="og:description" content={`Details for ${pro_url}`} />
//         <meta property="og:url" content={pro_url} />
//         <meta property="og:type" content="website" />
//       </Head>
//       <div>
//         <h1>{pro_id}</h1>
//         <div>{pro_url}</div>
//         {/* Render other property details as needed */}
//       </div>
//     </>
//   );
// };

// export default PropertyDetail;


// import React from 'react'

// export async function generateStaticParams() {
//   const posts = await fetch('https://api.vercel.app/blog').then((res) => res.json())
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// const page = ({ params }) => {
//   const { slug } = params;
//   return (
//     <div>
//       {slug}
//     </div>
//   )
// }

// export default page


// app/blog/[slug]/page.js

// import React from 'react';

// export async function generateStaticParams() {
//   const posts = await fetch('https://api.vercel.app/blog').then((res) => res.json());
//   return posts.map((post) => ({
//     params: { slug: post.title },
//   }));
// }


// const Page = ({ params }) => {
//   const { slug } = params; // Access slug from params
  
//   return (
//     <div>
//       <h1>Blog Post: {slug}</h1>

//     </div>
//   );
// };

// export default Page;










// "use client";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import pool from "src/app/libs/mysql";
import Link from "next/link";
// import Form from "@/components/form/Form";
// import Loader from "@/components/loader/Loader";
// import { useState } from "react";

const getData = async (slug) => {
  try {
    const db = await pool;
    const q =
      "SELECT * from experts LEFT JOIN expert_subjects ON experts.SubjectID = expert_subjects.sid where experts.id = ?";
    const query =
      "SELECT * from experts LEFT JOIN expert_subjects ON experts.SubjectID = expert_subjects.sid WHERE SubjectID = ? LIMIT 3";
    const [rows] = await db.query(q, slug);
    const [data] = await db.query(query, rows[0].SubjectID);

    return { row: rows[0], data: data };
  } catch (err) {
    return err;
  }
};

const Page = async ({ params }) => {
  const parr = params.slug.split("-");
  const length = parr.length;
  const id = parr[length - 1];
  const res = await getData(id);
  const data = res.row;
  const similar = res.data;

  // const [showLoader, setShowLoader] = useState(false);
  // const toggleLoader = (show) => {
  //   setShowLoader(show);
  // };
  return (
    <div>
      {/* {showLoader && <Loader />} */}
      <meta name="robots" content="noindex,nofollow" />

      <Header />
      <div className="flex justify-center pt-10">
        <div className="lg:w-[85%]  ">
          {/* <div className="lg:col-span-2 order-last lg:order-1 px-6 lg:px-0 w-full">
            <Form toggleLoader={toggleLoader} />
          </div> */}
          <div className="p-5 lg:col-span-6 lg:order-last">
            <div className="md:flex md:-mx-2 ">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-blue-500">
                 
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {data.Name}
                  </h1>
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          Active
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>
              <div className="w-full md:w-9/12 mx-2">
                <div className="bg-white shadow-sm rounded-sm">
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                      <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                          <h2 className="text-xl font-bold mb-4">About Me</h2>
                          <p className="text-gray-700">{data.Description}</p>

                          <h2 className="text-xl font-bold mt-6 mb-4 capitalize">
                            {data.Title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 hidden md:block">
              <div className="bg-white pb-3 mb-32 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                  <span>Similar Profiles</span>
                </div>
                <div className="flex flex-wrap gap-5">
                  {similar.map((item, index) => (
                    <div
                      className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                      key={index}
                    >
                      <img
                        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                        src={`/experts/${item.id}.jpg`}
                        alt="Woman's Face"
                      />
                      <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                          <p className="text-lg text-black font-semibold">
                            {item.Name}
                          </p>
                          <p className="text-slate-500 font-medium capitalize">
                            {item.Title}
                          </p>
                        </div>
                        <Link
                          href={`/test/${
                            item.Name.toLowerCase().replaceAll(" ", "-") +
                            "-" +
                            item.id
                          }`}
                          className="px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent"
                        >
                          Hire Expert
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
