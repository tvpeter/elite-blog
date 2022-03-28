import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex md:hidden">
      <button
        className="bg-purple text-white font-medium px-8 py-3 border border-purple rounded-md"
        onClick={() => setIsActive(true)}
      >
        Menu
      </button>
      {isActive && (
        <div
          className="absolute h-screen w-full z-10 top-0 left-0 bottom-0"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setIsActive(false)}
        >
          <div
            className="flex flex-col p-5  bg-purple w-full"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-end mb-2">
              <div
                className=" h-11 w-11 rounded-full bg-white flex justify-center items-center cursor-pointer"
                onClick={() => setIsActive(false)}
              >
                <p className="font-bold text-2xl text-purple">X</p>
              </div>
            </div>
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
      )}
    </div>
  );
}
