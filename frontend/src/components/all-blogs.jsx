import React from "react";
import BlogCard from "./blog-card";
import Nav from "./nav";
import Footer from "./footer";

const Blog = [
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
  "Css",
];
export default function AllBlogs() {
  return (
    <div>
      <Nav />
      <div className="mx-24 mb-8">
        <h1 className="text-app-black text-[3rem] font-bold w-[38.56rem] mt-4">
          All Blogs
        </h1>
        <div className="grid grid-cols-auto">
          {Blog.map((blog, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
