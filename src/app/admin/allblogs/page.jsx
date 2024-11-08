import React from "react";
import { getAllPosts } from "@/lib/api";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import AdminAllPostCard from "src/app/components/AdminAllPostCard";
import Link from "next/link";
const page = () => {
  const posts = getAllPosts();
  return (
    <div>
      <Header />
      <div className="pb-3 pt-3">
        <div className="container">
          <div className="row">

          <div><Link href={`/admin/deletedBlogs`}>View Deleted Post</Link></div>
        <AdminAllPostCard posts={posts} />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

