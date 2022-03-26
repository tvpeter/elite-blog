import React from "react";

export default function UserInfo() {
  return (
    <div className="flex justify-end items-center">
      <div className="flex justify-center items-center h-12 w-12 rounded-full bg-purple mr-5">
        <p className="text-white text-lg">MN</p>
      </div>
      <div className="flex flex-col">
        <p className="text-base font-medium text-app-black">
          Lightning@email.com
        </p>
        <p className="text-sm text-app-black opacity-40">Content Creator</p>
      </div>
    </div>
  );
}
