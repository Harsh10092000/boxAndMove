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




import { unstable_cache } from 'next/cache'

 
const getPosts = unstable_cache(
  async () => {
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return posts;
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)
 
export default async function Page() {
  const allPosts = await getPosts()
 
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}