import React, { useState } from "react";
import SideBar from "./side-bar";
import UserInfo from "./user-info";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";

export default function CreatePost() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
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
          <form>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Blog Title</label>
              <input
                type={"text"}
                className={`border border-app-black text-base p-2 text-app-black rounded-md mb-1 w-[80%]`}
                required
              />
            </div>
            <div className="flex flex-col my-4">
              <label className="text-lg font-medium">Cover Image</label>
              <input
                type={"file"}
                className={`border border-app-black text-base p-2 text-app-black rounded-md mb-1 w-[80%]`}
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
              <button className="py-3 px-9 bg-light-purple rounded-md text-purple font-medium border border-purple">
                Preview
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
