import React from "react";
import Nav from "../components/nav";
import Hero from "../asset/images/hero.svg";
import Line from "../asset/images/line.svg";
import CaretRight from "../asset/images/caret-right.svg";
import BlogCard from "../components/blog-card";
import Footer from "../components/footer";

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

export default function Home() {
  return (
    <div>
      <Nav />
      <div
        className="flex justify-between items-center px-24 py-10"
        style={{ backgroundColor: "#EFF0F3" }}
      >
        <div>
          <h1 className="text-app-black text-[4rem] font-bold w-[38.56rem]">
            Hi, Welcome to Elite BLog
          </h1>
          <p className="text-xl text-justify">
            On this blog platform, you get to offer value and be paid for it in
            Bitcoin, or you get to consume value and compensate the creator of
            the value in Bitcoin which is a win win for everyone
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img src={Hero} alt="Hero" />
        </div>
      </div>
      <div className="bg-white px-24 py-10 flex flex-col">
        <div className=" flex justify-between items-center">
          <div className=" flex items-center">
            <p className="font-bold text-2xl text-app-black mr-3">
              Featured Article
            </p>
            <img src={Line} alt="Line" />
          </div>
          <div className="flex items-center cursor-pointer">
            <p className="font-bold text-xl text-app-black mr-3">
              See All Article
            </p>
            <img src={CaretRight} alt="Caret" />
          </div>
        </div>
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
