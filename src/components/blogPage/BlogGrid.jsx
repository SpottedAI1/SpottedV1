import React from "react";
import Blog from "./Blog";

const BlogGrid = () => {
  return (
    <div className=" grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] gap-2">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default BlogGrid;
