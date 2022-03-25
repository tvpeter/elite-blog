import React from "react";

export default function Nav() {
  return (
    <nav
      className="flex justify-between items-center px-24 py-5"
      style={{
        backgoundColor: "#EFF0F3",
        boxShadow: "4px 6px 13px rgba(215, 215, 215, 0.25)",
      }}
    >
      <div className="flex items-end">
        <p className="font-semibold text-4xl text-dark">Elite</p>
        <p className="font-bold text-lg text-purple">.blog</p>
      </div>
      <div>
        <button className="py-3 px-4 bg-purple text-white text-lg font-bold rounded">
          Create Account
        </button>
      </div>
    </nav>
  );
}
