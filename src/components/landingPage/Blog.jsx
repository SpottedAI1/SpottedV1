"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DynamicBlog from "../blogPage/DynamicBlog";

const Blog = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://opensheet.elk.sh/1NT1P7u_cn1inozqsONz7akkKo6LCNUO4uguU2zathn4/sheet1"
      );

      const data = await res.json();

      //filtering published blogs
      const publishedBlogs = data.filter(
        (b) => b.Published?.trim().toLowerCase() === "yes"
      );

      setBlogs(publishedBlogs);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mt-45 mb-25 md:mb-50 px-5 md:px-15 flex gap-2 flex-col">
      <p className="font-geist-mono mb-1">/ BLOG</p>

      <nav className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <p className="font-semibold text-[40px] leading-[46px]">
          Product Updates & Insights
        </p>

        <button
          className="w-[110px] py-3 text-center bg-black text-white
          border border-black rounded-[6px]
          transition-all duration-300
          hover:bg-white hover:text-black
          hover:-translate-x-[4px] hover:-translate-y-[4px]
          hover:shadow-[4px_4px_0px_#000]"
          onClick={() => router.push("/blogs")}
        >
          All Posts
        </button>
      </nav>

      <section className="grid md:grid-cols-3 grid-cols-[1fr] gap-6">
        {blogs.map((item) => (
          <DynamicBlog key={item.id} props={item} />
        ))}
      </section>
    </div>
  );
};

export default Blog;
