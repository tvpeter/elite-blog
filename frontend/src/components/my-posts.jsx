import React from "react";
import SideBar from "./side-bar";
import UserInfo from "./user-info";
import BlogCard from "./blog-card";

const Blogs = ["Blog", "Blog", "Blog", "Blog", "Blog"];

export default function MyPosts() {
  return (
    <div className="p-[1.875rem]">
      <SideBar />
      <div className="ml-80 pl-10">
        <UserInfo />
        <div className="mt-12 mb-11">
          <p className="text-2xl text-app-black">My Posts</p>
          <p className="text-base text-app-black opacity-40">Home / My Posts</p>
        </div>
        <div className=" grid grid-cols-auto">
          {Blogs.map((blog, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
