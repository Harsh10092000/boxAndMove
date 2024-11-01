


'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const page = () => {
  const [data, setData] = useState([]);
 

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

 

  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.pro_url} 
          //onClick={() => handleItemClick(item.pro_url)} 
          style={{ cursor: 'pointer' }}>
           <Link href={`/singlepro/${item.pro_url}`}>{item.pro_url}</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;




