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
//     let data1 = await fetch('https://api.propertyease.in/api/pro/fetchPropertyData')
//     console.log(data1.json());
//   let data = await data1.json()
  
//     return (
//       <div>
//         {/* Render data here */}
//         {data.map((item) => (
//           <p key={item.id}>{item.name}</p>
//         ))}
//       </div>
//     );
//   }

// Ensure fetch works server-side (this should work by default in Next.js 13, no need to import node-fetch)

export default async function Page() {
    let posts = [];
  
    try {
      // Use fetch on the server-side to get data
      const response = await fetch('https://api.propertyease.in/api/pro/fetchPropertyData', {
        method: 'GET', // Explicitly mention method if needed
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed, like Authorization, etc.
        },
      });
  
      // Check for response status
      if (!response.ok) {
        console.error(`Failed to fetch data: ${response.statusText}`);
        throw new Error('Failed to fetch data');
      }
  
      // Parse the JSON response
      posts = await response.json();
  
      if (!Array.isArray(posts)) {
        console.error('Unexpected data format:', posts);
        posts = []; // If the data is not an array, fallback to an empty array
      }
  
    } catch (error) {
      console.error('Error fetching data:', error);
      posts = []; // Fallback to an empty list if there's an error
    }
  
    // Render the posts or a fallback message
    return (
      <div>
        <h2>Property List</h2>
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.pro_id}>{post.pro_id}</li>
            ))
          ) : (
            <li>No data found.</li>
          )}
        </ul>
      </div>
    );
  }
  
