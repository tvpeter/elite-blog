import React from "react";

export default function SideBar() {
  return (
    <div
      className="flex flex-col w-80 h-[92vh] rounded-[1.875rem] pl-[4.3rem] pt-[6.8rem] fixed"
      style={{
        background: "linear-gradient(321.69deg, #6246EA 0%, #9C8AF2 100%)",
      }}
    >
      <div className="flex items-end mb-20">
        <p className="font-bold text-4xl text-white">Elite</p>
        <p className="font-bold text-lg text-dark">.blog</p>
      </div>
      <div>
        <p className="font-extrabold text-lg text-white mb-9">Dashboard</p>
        <p className="font-medium text-lg text-white mb-9">Your Post</p>
        <p className="font-medium text-lg text-white mb-9">All Post</p>
      </div>
    </div>
  );
}
