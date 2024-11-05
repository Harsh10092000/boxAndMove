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




export function getPostsByCategory(category) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.category === category); 
  return posts;
}


// export function getRecentPosts(slug) {
//   const allPosts = getAllPosts();
//   return allPosts.slice(0, 5);
// }


export function getRecentPosts(slug, limit = 5) {
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