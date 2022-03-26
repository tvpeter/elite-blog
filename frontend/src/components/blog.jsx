import React from "react";

export default function Blog(props) {
  return (
    <div>
      <div
        className="h-[23.75rem] w-full px-24"
        style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      ></div>
      <div className="mx-48">
        <h1 className="font-bold text-app-black text-5xl">{props.title}</h1>
        <p className="text-app-black text-lg font-bold">
          Written by {props.author}
        </p>
      </div>
    </div>
  );
}
