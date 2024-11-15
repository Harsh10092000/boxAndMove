'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter
import Link from 'next/link';
const page = () => {
  const [data, setData] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyResponse = await axios.get(`https://api.propertyease.in/api/pro/fetchPropertyData`);
        console.log(propertyResponse.data);
        setData(propertyResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // Click handler to navigate to another page
  const handleItemClick = (itemId) => {
    // Assuming you want to navigate to a page like /property/[id]
    router.push(`/test/${itemId}`); // Change this path as needed
  };

  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.pro_url} 
          //onClick={() => handleItemClick(item.pro_url)} 
          style={{ cursor: 'pointer' }}>
           <Link href={`/test/${item.pro_url}`}>{item.pro_url}</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;