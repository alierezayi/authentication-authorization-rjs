import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "@/services/user";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";
import { useModal } from "../../context/ModalContextProvider";
import LogoutModal from "./modals/LogoutModal";

function ProfileMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { data, isLoading, refetch } = useQuery(["profile"], getProfile);
  const navigate = useNavigate();
  const { openModal } = useModal();

  const toggleVisibility = () => {
    data?.data ? setIsVisible(!isVisible) : navigate("/auth");
  };

  const logoutHandler = () => {
    setIsVisible(false);
    openModal(<LogoutModal />);
  };

  return (
    <div className="relative">
      <button
        className={`flex gap-1 items-center px-5 py-2.5 rounded-md hover:bg-gray-100 text-gray-600`}
        onClick={toggleVisibility}
        disabled={isLoading}
      >
        <img src="profile.svg" className="w-4" alt="profile" />
        دیوار من
      </button>

      {isVisible && (
        <div className="absolute top-14 w-[200px] bg-white border shadow p-2 rounded-md">
          <div className="divide-y">
            {data?.data.role === "ADMIN" && (
              <Link
                to="/admin"
                onClick={() => setIsVisible(false)}
                className="flex gap-2 items-center hover:bg-gray-100 w-full px-2 py-3 rounded-md text-gray-800 font-medium"
              >
                <GrUserAdmin className="text-lg" />
                <span className="text-sm">پنل ادمین</span>
              </Link>
            )}
            <button
              className="flex gap-2 items-center hover:bg-gray-100 w-full px-2 py-3 rounded-md text-red-600 font-medium"
              onClick={logoutHandler}
            >
              <HiOutlineLogout className="text-lg" />
              <span className="text-sm">خروج از حساب کاربری</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
