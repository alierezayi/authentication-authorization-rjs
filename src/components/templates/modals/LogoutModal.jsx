import { useQuery } from "@tanstack/react-query";
import { useModal } from "@/context/ModalContextProvider";
import { getProfile } from "@/services/user";
import { removeCookie } from "@/utils/cookie";
import { useState } from "react";
import Loader from "../../modules/Loader";
import { useNavigate } from "react-router-dom";

function LogoutModal() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const { refetch } = useQuery(["profile"], getProfile);

  const logoutHandler = () => {
    setIsLoading(true);
    removeCookie("accessToken");
    removeCookie("refreshToken");
    refetch();
    navigate("/");
    setIsLoading(false);
    closeModal();
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <h2 className="text-xl font-medium mb-7 text-red-600">خروج</h2>
      <p className="mb-7">آلا میخواهید از حساب کاربری خود خارج شوید ؟</p>
      <div className="flex justify-end gap-3">
        <button
          className="w-[70px] py-2 rounded-md bg-red-800 text-white hover:bg-red-700 transition disabled:bg-opacity-70"
          onClick={logoutHandler}
          disabled={isLoading}
        >
          بله
        </button>
        <button
          className="w-[70px] py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          onClick={closeModal}
          disabled={isLoading}
        >
          خیر
        </button>
      </div>
    </>
  );
}

export default LogoutModal;
