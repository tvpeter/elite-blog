import React, { useState } from "react";
import SideBar from "./side-bar";
import UserInfo from "./user-info";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import BlogPreview from "./blog-preview";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [currentStep, setCurrentStep] = useState("create");
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  function previewHandler() {
    setCurrentStep("preview");
  }

  const coverImageHandler = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };
  let navigate = useNavigate();

  const submitBlog = (e) => {
    e.preventDefault();
    const rawData = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    const data = {
      title: title,
      cover: coverImage,
      content: rawData,
      author: "Temitope Peter",
    };
    localStorage.setItem("blog", JSON.stringify(data));
    Swal.fire({
      icon: "success",
      title: `Blog Submitted Successfully`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard");
  };

  return (
    <div>
      {currentStep === "preview" && (
        <BlogPreview
          title={title}
          content={convertToRaw(editorState.getCurrentContent())}
          author={"Lightning"}
          back={setCurrentStep}
          cover={coverImage}
        />
      )}
      {currentStep === "create" && (
        <div className="p-[1.875rem]">
          <SideBar />
          <div className="ml-80 pl-10">
            <UserInfo />
            <div className="mt-12 mb-11">
              <p className="text-2xl text-app-black">Create Blog</p>
              <p className="text-base text-app-black opacity-40">
                Home / Create Blog
              </p>
            </div>
            <div className="">
              <form onSubmit={submitBlog}>
                <div className="flex flex-col">
                  <label className="text-lg font-medium">Blog Title</label>
                  <input
                    type={"text"}
                    className={`border border-app-black text-base p-2 text-app-black rounded-md mb-1 w-[80%] font-medium`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-lg font-medium">Cover Image</label>
                  <input
                    type={"file"}
                    className={`border border-app-black text-base p-2 text-app-black rounded-md mb-1 w-[80%]`}
                    accept="image/*"
                    onChange={(e) => coverImageHandler(e)}
                    required
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label className="text-lg font-medium">Blog Content</label>
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    wrapperStyle={{
                      boxShadow: "none",
                      border: "1px solid #e3e6ea",
                      borderRadius: "10px",
                      //   backgroundColor: "#fafafa",
                      minHeight: "19rem",
                      padding: "1em",
                    }}
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button className="bg-purple py-3 font-medium border border-purple px-9 text-white rounded-md mr-8">
                    Publish
                  </button>
                  <button
                    className="py-3 px-9 bg-light-purple rounded-md text-purple font-medium border border-purple"
                    onClick={previewHandler}
                  >
                    Preview
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
