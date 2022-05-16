import { useState } from "react";
import { Link } from "react-router-dom";
import logoUrl from "@/assets/images/logo.svg";

function Main(props) {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
        <div className="h-full flex items-center">
          {/* BEGIN: Logo */}
          <Link to="/" className="-intro-x hidden md:flex">
            <img
              alt="Food Trucks in San Francisco"
              className="w-6"
              src={logoUrl}
            />
            <span className="text-white text-lg ml-3"> Food Trucks in SF </span>
          </Link>
          {/* END: Logo */}
        </div>
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
