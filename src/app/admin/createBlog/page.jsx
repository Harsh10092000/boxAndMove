"use client";
import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import "./markdownstyling.css";
const Page = () => {
  const [blogContent, setBlogContent] = useState("");
  const [blogDetails, setBlogDetails] = useState({
    slug: "holiday-homework",
    title: "191+ Top Agriscience Fair Project Ideas ",
    description:
      "Is homework pointless? We think so! Discover 100 Reasons Why Homework Is Bad in our blog post. Learn how it stresses kids & stifles creativity. Find alternatives!",
    coverImage: "/images/blogImg/2.jpg",
    date: "2024-11-08",
    author: "Amar",
    category: "Residential Moving",
    catSlug: "residential-moving",
  });
  const content1 = `
> hi
>hlo


> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

## Who Invented Homework And When It Was Invented?
 `;

  const htmlContent = marked(content1);
  //console.log(htmlContent);
  // const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const metaData = `
---
slug: ${blogDetails.slug}
title: "${blogDetails.title}"
description: "${blogDetails.description}"
coverImage: "${blogDetails.coverImage}"
date: "${blogDetails.date}"
author: ${blogDetails.author}
category: "${blogDetails.category}"
catSlug: "${blogDetails.catSlug}"
---`;

    //setBlogContent({metaData, ...blogContent});
    const fullContent = `${metaData.trim()}\n${blogContent.trim()}`;
    console.log(fullContent);

    try {
      const response = await axios.post("/api/saveBlog", {
        content: fullContent, slug: blogDetails.slug
      });
      console.log(response.data.message);
    } catch (error) {
      console.error(
        "Error saving blog:",
        error.response?.data.message || error.message
      );
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleSubmit}>Click me to Save Blog</button>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-6">
            <input
              type="text"
              name="Post Link"
              placeholder="Post Link "
              required=""
              className="form-control"
              value={blogDetails.slug}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, slug: e.target.value })
              }
            />
            <input
              type="text"
              name="Post Title"
              placeholder="Post Title "
              required=""
              className="form-control"
              value={blogDetails.title}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, title: e.target.value })
              }
            />
            <input
              type="text"
              name="Post Description"
              placeholder="Post Description "
              required=""
              className="form-control"
              value={blogDetails.description}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, description: e.target.value })
              }
            />
            <input
              type="text"
              name="Cover Image"
              placeholder="Cover Image "
              required=""
              className="form-control"
              value={blogDetails.coverImage}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, coverImage: e.target.value })
              }
            />
            <input
              type="text"
              name="Date"
              placeholder="Date"
              required=""
              className="form-control"
              value={blogDetails.date}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, date: e.target.value })
              }
            />

            <input
              type="text"
              name="Author"
              placeholder="Author"
              required=""
              className="form-control"
              value={blogDetails.author}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, author: e.target.value })
              }
            />

            <input
              type="text"
              name="Category"
              placeholder="Category"
              required=""
              className="form-control"
              value={blogDetails.category}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, category: e.target.value })
              }
            />

            <input
              type="text"
              name="Category Slug"
              placeholder="Category Slug"
              required=""
              className="form-control"
              value={blogDetails.catSlug}
              onChange={(e) =>
                setBlogDetails({ ...blogDetails, catSlug: e.target.value })
              }
            />

            <textarea
              rows="10"
              cols="80"
              onChange={(e) => setBlogContent(e.target.value)}
            ></textarea>
          </div>
          <div className="col-md-6">
            <div className="post">
              {blogContent !== "" &&
              <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked(blogContent)),
                }}
              /> }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

// "use client";
// import { marked } from "marked";
// import DOMPurify from "dompurify";

// const Page = () => {
//   const content = `
//   # This is a header

//   This is some text.

//   ## This is a subheader
// `;
//   const htmlContent = marked(content);
//   console.log(htmlContent);
//   const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);

//   return (
//     <div

//              dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
//            />
//   );
// };

//export default Page;
