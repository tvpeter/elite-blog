import React from "react";
import Article_Image from "../asset/images/Article_Image.png";
import Author from "../asset/images/author.png";
import { useNavigate } from "react-router-dom";
import { dateFormatter } from "../util/index";

export default function BlogCard(props) {
  let navigate = useNavigate();
  const openBlog = (id) => {
    navigate(`/blog/${id}`);
  };
  const initials = (address) => {
    let initials = "";
    if (address) {
      initials = `${address[0]}${address[1]}`;
    }
    return initials;
  };
  return (
    <div
      className=" w-[18.75rem] h-[26.56rem] rounded-xl p-5 flex flex-col bg-white cursor-pointer my-6"
      style={{ boxShadow: "4px 6px 13px rgba(215, 215, 215, 0.25)" }}
      onClick={() => openBlog(props.article._id)}
    >
      <div className="flex flex-col">
        <div>
          <img
            src={`${props.article.image}`}
            alt="Blog Avatar"
            className="rounded-xl w-[16.25rem] h-[12.375rem]"
          />
        </div>
        <h3 className="font-bold text-xl text-app-black mt-6">
          {props.article.title}
        </h3>
      </div>
      <div className="mt-auto flex items-center">
        <div className="mr-4 w-[57px] h-[57px] rounded-full flex justify-center items-center bg-light-purple">
          <p className="text-purple text-lg uppercase">
            {initials(props.article.author)}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-app-black">
            {props.article.username}
          </p>
          <p className=" text-sm text-app-black">
            {dateFormatter(props.article.created)}
          </p>
        </div>
      </div>
    </div>
  );
}
