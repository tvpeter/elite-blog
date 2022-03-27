import React from "react";
import Close from "../asset/images/close.svg";

export default function Modal(props) {
  const closeModalHandler = () => {
    document.querySelector("body")?.classList.remove("no-scroll");
    props.setIsModal(false);
  };
  return (
    <div
      className={`${
        props.isModal ? "flex" : "hidden"
      } w-full h-screen fixed top-0 pt-20 left-0 justify-center`}
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      onClick={closeModalHandler}
    >
      <div
        className="bg-white h-fit w-full rounded-lg"
        style={{ maxWidth: "43.25rem" }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between items-center py-2 px-3 md:px-6 border-b border-cream-md mb-8">
          <p className="font-semibold text-lg md:text-2xl text-blue-dark">
            {props.title}
          </p>
          <div className="cursor-pointer" onClick={closeModalHandler}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
