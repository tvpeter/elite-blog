import React, { useState } from "react";
import SideBar from "./side-bar";
import PostIcon from "../asset/images/post.svg";
import CategoryIcon from "../asset/images/category.svg";
import UserIcon from "../asset/images/user.svg";
import UserInfo from "./user-info";
import { useNavigate } from "react-router-dom";
import { Loader } from "rsuite";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-[1.875rem]">
      <SideBar />
      <div className="ml-80 pl-10">
        <UserInfo />
        <div className="mt-12 mb-7">
          <p className="text-2xl text-app-black">Dashboard</p>
          <p className="text-base text-app-black opacity-40">
            Home / Dashboard
          </p>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div
            className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4"
            onClick={() => navigate("/my-posts")}
          >
            <div className="flex flex-col">
              <p className="font-medium text-app-black text-xl mb-1">Posts</p>
              <p className="text-purple text-3xl">10</p>
            </div>
            <div>
              <img src={PostIcon} alt="Post" />
            </div>
          </div>
          <div className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4">
            <div className="flex flex-col">
              <p className="font-medium text-app-black text-xl mb-1">Balance</p>
              <p className="text-purple text-3xl">20,000 Sat</p>
            </div>
            <div>
              <img src={CategoryIcon} alt="Post" />
            </div>
          </div>
          <div className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4">
            <div className="flex flex-col">
              <p className="font-medium text-app-black text-xl mb-1">Users</p>
              <p className="text-purple text-3xl">5</p>
            </div>
            <div>
              <img src={UserIcon} alt="Post" />
            </div>
          </div>
        </div>
        <div className="mt-16 text-base font-semibold text-app-black">
          <div className="bg-light-purple rounded-[20px] flex items-center justify-center h-[3.4rem] w-80 mb-7">
            <p>Latest Posts</p>
          </div>
          <div>
            <div
              className="cursor-pointer mb-5"
              onClick={() => navigate("/blog/10")}
            >
              <p className="text-base text-app-black">The Power of Dream</p>
              <p className="text-sm text-app-black opacity-40">28 June 2021</p>
            </div>
            <div
              className="cursor-pointer mb-5"
              onClick={() => navigate("/blog/10")}
            >
              <p className="text-base text-app-black">Emotional Healing</p>
              <p className="text-sm text-app-black opacity-40">22 June 2021</p>
            </div>
            <div
              className="cursor-pointer mb-5"
              onClick={() => navigate("/blog/10")}
            >
              <p className="text-base text-app-black">Works vs School</p>
              <p className="text-sm text-app-black opacity-40">21 June 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
