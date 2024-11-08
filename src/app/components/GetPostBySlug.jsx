// "use server"
// import React from 'react'
// import { getPostBySlug } from '@/lib/api'

// const GetPostBySlug = async ({slug}) => {
//   console.log("slug : ", slug);
//     const response = await getPostBySlug(slug);
//   return response;
// }

// export default GetPostBySlug


"use server"
import { getPostBySlug } from '@/lib/api';

const GetPostBySlug = async ({ slug }) => {
  console.log("Fetching post with slug:", slug);
  try {
    const response = await getPostBySlug(slug); 
    console.log(response)
    return response;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Failed to fetch post');
  }
};

export default GetPostBySlug;

