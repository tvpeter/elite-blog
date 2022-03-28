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
import Modal from "./modal";
import { requestProvider } from "webln";

export default function Blog(props) {
  const [convertedContent, setConvertedContent] = useState(null);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState(useParams().id);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModal, setIsModal] = useState(true);
  const [invoice, setInvoice] = useState(
    "lnbc300n1p3yzrlvpp50klfcv97xfqpwr7pyxh8gds686xgr52fa44c3c4q4nsuzpqgfzyqdqvw35x2grhv9uscqzpgxqyz5vqsp5d33gq5pk966k4l6vzkdp9akgvrtncmd7pmmgntg03f2hfgwl6drs9qyyssqhmvz88jajqxc06caazqxl48aq6cjl9tz3h266vktu2jnk8ecsy2yrha89r7xhurta7al47rgufgshjt24h7w8m9pkxaafa3p3g8qwhgqye8ztm"
  );
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

  const makePayment = async () => {
    try {
      const webln = await requestProvider();
      const info = await webln.sendPayment(invoice);
      console.log(info);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav />
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        title="Pay little Satoshi"
      >
        <div className="px-8">
          <p className="text-lg text-app-black text-center">
            In order to view this article you are required to pay 10 Satoshi to
            the creator of this article as a means of appreciation to them.
          </p>
          <p className="text-lg text-app-black text-center mt-4">
            This is not enough compensation for the content they've put out, but
            just a little token to appreciate them
          </p>
        </div>
        <div className="bg-light-purple px-6 py-3 flex justify-end mt-4">
          <button
            className="bg-purple text-white px-5 py-3 font-medium rounded-md"
            onClick={makePayment}
          >
            Make Payment Now
          </button>
        </div>
      </Modal>
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
