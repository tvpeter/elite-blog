import React, { useState, useEffect } from "react";
import { requestProvider } from "webln";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";
import UserInfo from "./user-info";
import ApiService from "../service";
import Swal from "sweetalert2";
import classes from "./button.module.css";

export default function Nav() {
  const [isModal, setModal] = useState(false);
  const [address, setAddress] = useState("");
  const [logged, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const openModal = async () => {
    setModal(true);
    // try {
    //   const webln = await requestProvider();
    //   const info = await webln.getInfo();
    //   console.log(info);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const verifyAddress = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      address: address,
    };

    try {
      const response = await ApiService.post(`/lnurl`, data);
      if (response.data.status) {
        Swal.fire({
          icon: "success",
          title: `Address Verified Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("address", response.data.data.identifier);
        setLoading(false);
        navigate("/dashboard");
      } else {
        Swal.fire({
          icon: "error",
          title: `Invalid Addes`,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("address");
    if (user) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <nav
      className="flex justify-between items-center px-24 py-5"
      style={{
        backgoundColor: "#EFF0F3",
        boxShadow: "4px 6px 13px rgba(215, 215, 215, 0.25)",
      }}
    >
      <Modal
        isModal={isModal}
        setIsModal={setModal}
        title="Login with Lightning Address"
      >
        <form onSubmit={verifyAddress}>
          <div className="flex flex-col px-10">
            <label className="text-lg font-medium">Lightning Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type={"text"}
              required
              className={`border border-app-black text-base p-2 text-app-black rounded-md mb-1 font-medium`}
            />
          </div>
          <div className="flex justify-end py-3 mt-6 px-4 bg-light-purple">
            <button
              className={`py-2 px-9 bg-purple rounded-md text-white font-medium border border-purple relative ${
                loading ? classes.button__loading : ""
              }`}
            >
              <span className={classes.button__text}>Login</span>
            </button>
          </div>
        </form>
      </Modal>
      <div className="flex items-end">
        <p className="font-semibold text-4xl text-dark">Elite</p>
        <p className="font-bold text-lg text-purple">.blog</p>
      </div>
      <div>
        {logged ? (
          <UserInfo />
        ) : (
          <button
            className="py-3 px-5 bg-purple text-white text-lg font-bold rounded"
            onClick={openModal}
          >
            Login with Lightning Address
          </button>
        )}
      </div>
    </nav>
  );
}
