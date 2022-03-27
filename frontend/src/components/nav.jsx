import React, { useState, useEffect } from "react";
import { requestProvider } from "webln";
import Modal from "./modal";
import { useNavigate } from "react-router-dom";
import UserInfo from "./user-info";

export default function Nav() {
  const [isModal, setModal] = useState(false);
  const [address, setAddress] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [logged, setLoggedIn] = useState(false);
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

  const verifyAddress = (e) => {
    e.preventDefault();
    localStorage.setItem("address", address);
    navigate("/dashboard");
    try {
    } catch (error) {}
  };

  useEffect(() => {
    const user = localStorage.getItem("address");
    if (user) {
      setUserAddress(user);
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
            <button className="py-2 px-9 bg-light-purple rounded-md text-purple font-medium border border-purple">
              Login
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
