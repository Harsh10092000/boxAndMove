import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const postsDirectory = join(process.cwd(), "_post");
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}




// import axios from 'axios';
// const API_URL = 'http://localhost:3000/wp-json/wp/v2';

// export const getAllPosts = async () => {
//   const response = await axios.get(`${API_URL}/posts`);
//   return response.data;
// };

// export const getPostBySlug = async (slug) => {
//   const response = await axios.get(`${API_URL}/posts?slug=${slug}`);
//   return response.data[0];
// };
