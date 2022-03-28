import React, { useState, useEffect } from "react";
import SideBar from "./side-bar";
import UserInfo from "./user-info";
import BlogCard from "./blog-card";
import MobileNav from "./mobile-nav";
import ApiService from "../service";
import Loader from "./loader/loader";

const Blogs = ["Blog", "Blog", "Blog", "Blog", "Blog"];

export default function MyPosts() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMyArticles = async () => {
    try {
      const response = await ApiService.get(
        `/user/articles?address=${localStorage.getItem("address")}`
      );
      setArticles(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };
  useEffect(() => {
    getMyArticles();
  }, []);
  return (
    <div className="px-4 md:p-[1.875rem]">
      <SideBar />

      <div className="md:ml-80 md:pl-10">
        <div className="hidden md:flex justify-end">
          <UserInfo />
        </div>
        <MobileNav />
        <div className="mt-12 mb-11">
          <p className="text-2xl text-app-black">My Posts</p>
          <p className="text-base text-app-black opacity-40">Home / My Posts</p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className=" grid grid-cols-auto">
            {articles.map((article, index) => (
              <BlogCard article={article} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
