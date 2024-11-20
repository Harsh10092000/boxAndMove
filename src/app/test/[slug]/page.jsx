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

import React from 'react';

export async function generateStaticParams() {
  const posts = await fetch('https://api.vercel.app/blog').then((res) => res.json());
  return posts.map((post) => ({
    params: { slug: post.title },
  }));
}


const Page = ({ params }) => {
  const { slug } = params; // Access slug from params
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>

    </div>
  );
};

export default Page;

