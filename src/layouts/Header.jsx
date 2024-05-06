import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2 py-3 px-2">
      <div className="flex divide-x-reverse divide-x-2">
        <Link to="/" className="pl-5">
          <img src="divar.svg" className="w-12" alt="logo" />
        </Link>
        <span className="flex px-5 items-center gap-1">
          <img src="location.svg" className="w-6" alt="location" />
          <p className="text-gray-600">کرمان</p>
        </span>
      </div>
      <div className="flex items-center gap-5 md:gap-10">
        <Link to="/auth" className="flex gap-1 items-center">
          <img src="profile.svg" className="w-4" alt="" />
          <p className="text-gray-600">دیوار من</p>
        </Link>
        <Link
          to="/dashboard"
          className="px-4 bg-red-800 text-white py-2 rounded-md"
        >
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
