import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-3 px-2 border-b-2">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex divide-x-reverse divide-x-[3px]">
          <Link to="/" className="pl-5">
            <img src="divar.svg" className="w-12" alt="logo" />
          </Link>
          <span className="flex px-5 items-center gap-1">
            <img src="location.svg" className="w-6" alt="location" />
            <p className="text-gray-600">کرمان</p>
          </span>
        </div>
        <div className="flex items-center gap-5 md:gap-7">
          <Link
            to="/auth"
            className="flex gap-1 items-center px-5 py-2.5 rounded-md hover:bg-gray-100"
          >
            <img src="profile.svg" className="w-4" alt="" />
            <p className="text-gray-600">دیوار من</p>
          </Link>
          <Link
            to="/dashboard"
            className="px-5 bg-red-800 text-white py-2.5 rounded-md"
          >
            ثبت آگهی
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
