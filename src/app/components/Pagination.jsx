"use client";
import React from "react";
import { useRouter } from "next-nprogress-bar";

const Pagination = () => {
  const router = useRouter();
  return (
    <div className="container">
    <div className="d-flex">
      <div className="px-1" onClick={(e, value) => router.push(`/blog?page=${1}` , {}, { showProgressBar: true, startPosition: 0.2 })}>1</div>
      <div className="px-1" onClick={(e, value) => router.push(`/blog?page=${2}` , {}, { showProgressBar: true, startPosition: 0.2 })}>2</div>
      <div className="px-1" onClick={(e, value) => router.push(`/blog?page=${3}` , {}, { showProgressBar: true, startPosition: 0.2 })}>3</div>
      <div className="px-1" onClick={(e, value) => router.push(`/blog?page=${4}`, {}, { showProgressBar: true, startPosition: 0.2 })}>4</div>
    </div>
    </div>
  );
};

export default Pagination;
