import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import axios from "axios";
import pool from "src/app/libs/mysql";

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
  console.log("slug in get All Posts : " , slugs );
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


const postsRecycleBinDirectory = join(process.cwd(), "_recyclebin");
export function getDeletedPostSlugs() {
  return fs.readdirSync(postsRecycleBinDirectory);
}
export function getDeletedPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsRecycleBinDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content };
}

export function getAllDeletedPosts() {
  const slugs = getDeletedPostSlugs();
  const posts = slugs
    .map((slug) => getDeletedPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}


export function getLatestPosts() {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts.slice(0, 3);
}


export function getPostsByCategory(category) {
  const slugs = getPostSlugs();
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.catSlug === category); 
  return posts;
}


// export function getRecentPosts(slug) {
//   const allPosts = getAllPosts();
//   return allPosts.slice(0, 5);
// }


export function getRecentPosts(slug, limit = 5) {
  const slugs = getPostSlugs();
  console.log("slug in get Latest Posts : " , slugs );
  const allPosts = getAllPosts();
  const recentPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
  return recentPosts;
}

export function getCategoryList() {
  const slugs = getPostSlugs();
  const categories = slugs
    .map((slug) => getPostBySlug(slug).category) 
    .filter((category, index, self) => category && self.indexOf(category) === index); 
  return categories;
}



export const getProperties = async () => {
  try {
    const response = await axios.get('https://api.propertyease.in/api/pro/fetchPropertyData');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};


export const getExperts = async (currentPage) => {
  try {
    const db = await pool;
    const query =
      "SELECT * from experts LEFT JOIN expert_subjects ON experts.SubjectID = expert_subjects.sid WHERE experts.id > ? limit 12";
    const q = "SELECT COUNT(*) as total from experts";

    const [rows] = await db.query(query, (currentPage - 1) * 12);
    const [total] = await db.query(q);
    return { data: rows, total: total };
  } catch (error) {
    return error;
  }
}