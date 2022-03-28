import React, { useState, useEffect } from "react";
import BlogCard from "./blog-card";
import Nav from "./nav";
import Footer from "./footer";
import ApiService from "../service";
import Loader from "./loader/loader";

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
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const getAllPost = async () => {
    try {
      const posts = await ApiService.get("/articles");
      if (posts.data.status) {
        setArticles(posts.data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div>
      <Nav />
      <div className="mx-4 md:mx-24 mb-8">
        <h1 className="text-app-black text-2xl md:text-[3rem] font-bold mt-4">
          All Articles
        </h1>
        {loading ? (
          <div className="flex items-center justify-center h-[70vh]">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center md:grid grid-cols-auto">
            {articles.map((article, index) => (
              <BlogCard article={article} key={index} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
