import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Footer from "./footer";
import draftToHtml from "draftjs-to-html";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import ApiService from "../service";
import { dateFormatter } from "../util";
import Loader from "./loader/loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Blog(props) {
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(useParams().id);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchArticle = async () => {
    try {
      const response = await ApiService.get(`/articles/get-article/${id}`);
      setTitle(response.data.data.title);
      setCover(response.data.data.image);
      setAuthor(response.data.data.author);
      setDate(response.data.data.created);
      let tempContent = JSON.parse(response.data.data.bodyContent);
      setConvertedContent(draftToHtml(tempContent));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: `Article does not Exist`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <div>
      <Nav />
      {loading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Loader />
        </div>
      ) : (
        <div>
          <div
            className="h-[23.75rem] mx-24 bg-light-purple rounded-md mt-10"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${cover})`,
            }}
          ></div>
          <div className="mx-48 mt-10">
            <div className="border-b pb-7">
              <h1 className="font-bold text-app-black text-5xl">{title}</h1>
              <p className="text-app-black text-lg font-bold mt-5">
                Written by <span className="capitalize">{author}</span>{" "}
                <span className="font-normal ml-4" style={{ color: "#718096" }}>
                  {dateFormatter(date)}{" "}
                </span>
              </p>
            </div>
            <div className="mt-8 mb-10">
              <div
                dangerouslySetInnerHTML={createMarkup(convertedContent)}
              ></div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
