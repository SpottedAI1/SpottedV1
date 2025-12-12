export const dynamic = "force-dynamic";
export const dynamicParams = true;

import AllinOne from "@/components/blogPage/AllinOne";
import Footer from "@/components/landingPage/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

async function getBlogs() {
  const res = await fetch(
    "https://opensheet.elk.sh/1NT1P7u_cn1inozqsONz7akkKo6LCNUO4uguU2zathn4/sheet1"
  );
  return res.json();
}

export default async function BlogExpand({ params }) {
  const resolvedParams = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.id == resolvedParams.id);
  if (!blog) return <h1 className="p-10 text-red-500">Blog not found</h1>;
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="sticky top-0 z-[100]">
        <NavBar />
      </div>
      <div className="bg-white min-h-screen">
        <section className="relative px-2 md:px-15 flex flex-col justify-end items-center gap-5 mb-5 w-full h-[530px] overflow-clip">
          <img
            src={blog["image link"]}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div
            className="md:px-5 px-2 md:mx-10 flex flex-col z-10 text-white 
             bg-white/10 backdrop-blur-md rounded-xl shadow-lg  md:py-5 pb-10"
          >
            <div className="flex gap-4 items-center mt-auto pt-2 mb-2 ">
              <p className="text-[11px] font-medium">{blog.category}</p>
              <p className="text-[12px] font-medium text-[#636363] bg-white px-2 py-1 rounded-[4px] ">
                {blog.date}
              </p>
            </div>
            <p className="font-semibold md:text-[56px] leading-[40px]  md:leading-[61px] mb-2 text-[38px]">
              {blog.title}
            </p>

            <p className="text-medium text-[14px] ">{blog.except}</p>
          </div>
        </section>
        <section className="md:w-[654px] mx-auto px-4 py-10 pb-20">
          <div className="text-gray-900 leading-relaxed">{blog.content}</div>
        </section>
        <AllinOne />
        <Footer />
      </div>
    </div>
  );
}
