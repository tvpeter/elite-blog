import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function RouteProtector(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("address");
    if (!user) {
      Swal.fire({
        icon: "error",
        title: `Please Login`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  }, []);
  return <>{props.children}</>;
}
