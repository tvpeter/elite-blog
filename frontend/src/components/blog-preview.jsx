import React, { useState, useEffect } from "react";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

export default function BlogPreview(props) {
  const [convertedContent, setConvertedContent] = useState(null);
  useEffect(() => {
    setConvertedContent(convertToHTML(props.content));
  }, []);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const back = () => {
    props.back("create");
  };
  return (
    <div>
      <div className="my-6 mx-24">
        <button
          className="bg-purple text-lg text-white font-medium py-3 px-10 rounded-md"
          onClick={back}
        >
          Back
        </button>
      </div>
      <div
        className="h-[23.75rem] mx-24 bg-light-purple rounded-md"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${props.cover})`,
        }}
      ></div>
      <div className="mx-48 mt-10">
        <div className="border-b pb-7">
          <h1 className="font-bold text-app-black text-5xl">{props.title}</h1>
          <p className="text-app-black text-lg font-bold mt-5">
            Written by {props.author}
          </p>
        </div>
        <div className="mt-8">
          <div dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
        </div>
      </div>
      <div className="flex justify-end my-6 mx-24">
        <button
          className="bg-purple text-lg text-white font-medium py-3 px-10 rounded-md"
          onClick={back}
        >
          Back
        </button>
      </div>
    </div>
  );
}
