"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
import { use } from "react";
import { useRouter } from "next/navigation";
//import { getPostBySlug } from '@/lib/api';
import GetPostBySlug from "src/app/components/GetPostBySlug";
const page = ({ params }) => {
  const router = useRouter();

  const { slug } = use(params);
  const [post, setPost] = useState([]);

  const [blogContent, setBlogContent] = useState("");
  const [blogDetails, setBlogDetails] = useState({
    slug: "",
    title: "",
    description: "",
    coverImage: "",
    date: "",
    author: "",
    category: "",
    catSlug: "",
  });

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const data = await GetPostBySlug({slug});
        console.log(data);
        setPost(data);
        setBlogDetails({
          slug: data.slug,
          title: data.title,
          description: data.description,
          coverImage: data.coverImage,
          date: data.date,
          author: data.author,
          category: data.category,
          catSlug: data.catSlug,
        });
        setBlogContent(data.content);
      } catch (err) {
        console.log("Failed to fetch post");
      }
    };

    fetchPost();
  }, [slug]);

  console.log("post : ", blogDetails);

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

    const fullContent = `${metaData.trim()}\n${blogContent.trim()}`;
    console.log(fullContent);

    try {
      const response = await axios.put("/api/saveBlog", {
        content: fullContent,
        slug: blogDetails.slug,
      });
      console.log(response.data.message);
      router.push(`/blog/${blogDetails.slug}`);
    } catch (error) {
      console.error(
        "Error saving blog:",
        error.response?.data.message || error.message
      );
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
      <button onClick={handleSubmit}>Update Blog</button>
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
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
            ></textarea>
          </div>
          <div className="col-md-6">
            <div className="post">
              <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked(blogContent)),
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
