import React, { useState, useEffect } from "react";
import SideBar from "./side-bar";
import PostIcon from "../asset/images/post.svg";
import CategoryIcon from "../asset/images/category.svg";
import UserIcon from "../asset/images/user.svg";
import UserInfo from "./user-info";
import { useNavigate } from "react-router-dom";
import MobileNav from "./mobile-nav";
import Loader from "./loader/loader";
import ApiService from "../service";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(0);
  const [satosh, setSatosh] = useState(0);
  const [users, setUsers] = useState(0);

  const getDashboard = async () => {
    try {
      const response = await ApiService.get(
        `/dashboard?address=${localStorage.getItem("address")}`
      );
      setPosts(response.data.data.subscriptions);
      setSatosh(response.data.data.subscriptionAmount);
      setUsers(response.data.data.subscribers);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <div className="p-4 md:p-[1.875rem]">
      <SideBar />
      <div className="md:ml-80 md:pl-10">
        <div className="hidden md:flex justify-end">
          <UserInfo />
        </div>
        <MobileNav />
        <div className="mt-12 mb-7">
          <p className="text-2xl text-app-black">Dashboard</p>
          <p className="text-base text-app-black opacity-40">
            Home / Dashboard
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <Loader />
          </div>
        ) : (
          <div className="flex justify-between items-center flex-wrap">
            <div
              className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4"
              onClick={() => navigate("/my-posts")}
            >
              <div className="flex flex-col">
                <p className="font-medium text-app-black text-xl mb-1">Posts</p>
                <p className="text-purple text-3xl">{posts}</p>
              </div>
              <div>
                <img src={PostIcon} alt="Post" />
              </div>
            </div>
            <div className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4">
              <div className="flex flex-col">
                <p className="font-medium text-app-black text-xl mb-1">
                  Sats Generated
                </p>
                <p className="text-purple text-3xl">{satosh} Sat</p>
              </div>
              <div>
                <img src={CategoryIcon} alt="Post" />
              </div>
            </div>
            <div className="h-40 w-80 bg-light-purple p-10 rounded-[20px] flex justify-between items-center cursor-pointer mt-4">
              <div className="flex flex-col">
                <p className="font-medium text-app-black text-xl mb-1">Users</p>
                <p className="text-purple text-3xl">{users}</p>
              </div>
              <div>
                <img src={UserIcon} alt="Post" />
              </div>
            </div>
          </div>
        )}
        {/* <div className="mt-16 text-base font-semibold text-app-black">
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
        </div> */}
      </div>
    </div>
  );
}
