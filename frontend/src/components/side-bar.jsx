import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="hidden md:flex flex-col w-80 h-[92vh] rounded-[1.875rem] pl-[4.3rem] pt-[6.8rem] fixed"
      style={{
        background: "linear-gradient(321.69deg, #6246EA 0%, #9C8AF2 100%)",
      }}
    >
      <div className="flex items-end mb-20">
        <p className="font-bold text-4xl text-white">Elite</p>
        <p className="font-bold text-lg text-dark">.blog</p>
      </div>
      <div className="flex flex-col">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold text-lg text-white mb-9"
              : "font-medium text-lg text-white mb-9"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/my-posts"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold text-lg text-white mb-9"
              : "font-medium text-lg text-white mb-9"
          }
        >
          Your Posts
        </NavLink>
        <NavLink
          to="/my-paid-posts"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold text-lg text-white mb-9"
              : "font-medium text-lg text-white mb-9"
          }
        >
          My Paid Post
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold text-lg text-white mb-9"
              : "font-medium text-lg text-white mb-9"
          }
        >
          All Post
        </NavLink>
        <NavLink
          to="/create-post"
          className={({ isActive }) =>
            isActive
              ? "font-extrabold text-lg text-white mb-9"
              : "font-medium text-lg text-white mb-9"
          }
        >
          Create Post
        </NavLink>
      </div>
    </div>
  );
}
