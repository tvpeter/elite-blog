import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";
import draftToHtml from "draftjs-to-html";
import DOMPurify from "dompurify";

export default function Blog(props) {
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    let blog = localStorage.getItem("blog");
    if (blog) {
      blog = JSON.parse(blog);
      setTitle(blog.title);
      setCover(blog.cover);
      setAuthor(blog.author);
      let tempContent = JSON.parse(blog.content);
      setConvertedContent(draftToHtml(tempContent));
    }
  }, []);
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <div>
      <Nav />
      <div
        className="h-[23.75rem] mx-24 bg-light-purple rounded-md mt-10"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${cover})`,
        }}
      ></div>
      <div className="mx-48 mt-10">
        <div className="border-b pb-7">
          <h1 className="font-bold text-app-black text-5xl">{title}</h1>
          <p className="text-app-black text-lg font-bold mt-5">
            Written by {author}{" "}
            <span className="font-normal ml-4" style={{ color: "#718096" }}>
              Monday May 20{" "}
            </span>
          </p>
        </div>
        <div className="mt-8 mb-10">
          <div dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
