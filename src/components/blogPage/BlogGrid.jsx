import React from "react";
import Blog from "./Blog";
import DynamicBlog from "./DynamicBlog";

async function getBlogs() {
  const res = await fetch(
    "https://opensheet.elk.sh/1NT1P7u_cn1inozqsONz7akkKo6LCNUO4uguU2zathn4/sheet1",
    { next: { revalidate: 60 } }
  );
  return res.json();
}

const BlogGrid = async () => {
  const blogs = await getBlogs();

  return (
    <div className=" grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] gap-2">
      {blogs.map((item, index) => (
        <DynamicBlog key={index} props={item} />
      ))}
    </div>
  );
};

export default BlogGrid;
