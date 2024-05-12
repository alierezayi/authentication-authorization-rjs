import { Link } from "react-router-dom";
import ProfileMenu from "../components/templates/ProfileMenu";

function Header() {
  return (
    <header className="py-3 px-2 border-b-2">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="flex">
          <Link to="/" className="pl-5">
            <img src="divar.svg" className="w-12" alt="logo" />
          </Link>
          <div className="flex px-3 items-center gap-1 py-2 rounded-md bg-gray-100 w-[200px]">
            <img src="location.svg" className="w-6" alt="location" />
            <p className="text-gray-600">کرمان</p>
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-7">
          <ProfileMenu />
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
