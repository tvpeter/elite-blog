import React from "react";
import Article_Image from "../asset/images/Article_Image.png";
import Author from "../asset/images/author.png";

export default function BlogCard() {
  return (
    <div
      className=" w-[18.75rem] h-[26.56rem] rounded-xl p-5 flex flex-col bg-white cursor-pointer my-6"
      style={{ boxShadow: "4px 6px 13px rgba(215, 215, 215, 0.25)" }}
    >
      <div className="flex flex-col">
        <div>
          <img
            src={Article_Image}
            alt="Blog Avatar"
            className="rounded-xl w-[16.25rem] h-[12.375rem]"
          />
        </div>
        <h3 className="font-bold text-xl text-app-black mt-6">
          Fundamental of javascript
        </h3>
      </div>
      <div className="mt-auto flex items-center">
        <div className="mr-4">
          <img
            src={Author}
            alt="author"
            className="rounded-full w-[57px] h-[57px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-app-black">Dasteen</p>
          <p className=" text-sm text-app-black">Jan 10, 2022</p>
        </div>
      </div>
    </div>
  );
}
