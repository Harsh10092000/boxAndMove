// import Footer from '@/components/footer/Footer'
// import Header from '@/components/navbar/Navbar'
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

import React from "react";

const page = () => {
  const post = getAllPosts();
  const morePost = post.slice(1);
  return (
    <div>
      {/* <Header/> */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* <Link
            href={`/blog/${post[0].slug}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={post[0].coverImage}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {" "}
                {post[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {new Date(post[0].date).toDateString()}
              </span>
              <p> {post[0].description}</p>
            </div>
          </Link> */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {post.map((item, index) => (
              <Link
                href={`/blog/${item.slug}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                key={index}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={item.coverImage}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {" "}
                    {item.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {" "}
                    {new Date(item.date).toDateString()}
                  </span>
                  <p> {item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default page;
