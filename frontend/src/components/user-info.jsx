import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserInfo() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("address");
    if (user) {
      setAddress(user);
    }
  }, []);
  const initials = (address) => {
    let initials = "";
    if (address) {
      initials = `${address[0]}${address[1]}`;
    }
    return initials;
  };
  return (
    <div
      className="flex justify-end items-center cursor-pointer"
      onClick={() => navigate("/dashboard")}
    >
      <div className="flex justify-center items-center h-12 w-12 rounded-full bg-purple mr-5">
        <p className="text-white text-lg uppercase">{initials(address)}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-base font-medium text-app-black">{address}</p>
        <p className="text-sm text-app-black opacity-40">Content Creator</p>
      </div>
    </div>
  );
}
