"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const AdminAllPostCard = ({ posts }) => {
    const [postsCopy, setPostsCopy] = useState([]);
    useEffect(() => {
        setPostsCopy(posts);
    }, []);

  const handleDelete = async (slug) => {
    try {
      const response = await axios.delete(`/api/saveBlog`, {
        data: {slug} , 
      });
      console.log(response.data.message);
      setPostsCopy(postsCopy.filter(post => post.slug !== slug));
    } catch (error) {
      console.error(
        "Error deleting blog:",
        error.response?.data?.message || error.message
      );
    }
  };
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Slug</th>
            <th>Title</th>
            <th>Date</th>
            <th>Author</th>
            <th>Category</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {postsCopy.map((item, index) => (
            <tr key={index}>
              <td>{item.slug}</td>
              <td>{item.title}</td>
              <td>{item.date}</td>
              <td>{item.author}</td>
              <td>{item.category}</td>
              <td><Link href={`/admin/editblog/${item.slug}`}>Edit</Link></td>
              <td onClick={() => handleDelete(item.slug)}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllPostCard;
