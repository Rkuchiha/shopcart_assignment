import React from "react";

import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import LanguageDropdown from "./comps/Language";
import LocationDropdown from "./comps/LocationTab";
const Header = () => {
  return (
    <footer className="flex flex-row  bg-green-950">
      <div className="flex basis-1/3 py-2 px-4 font-semibold ml-10 text-left text-light-white">
        <HiOutlinePhoneMissedCall />
        +00123567890
      </div>
      <div className="basis-1/3 flex text-center text-light-white">
        <div className="pr-4 py-2 px-4 font-semibold border-r-2 border-white">
          Get 50% off on Selected items
        </div>
        <div className=" py-2 px-4 font-semibold"> Shop Now</div>
      </div>
      <div className="basis-1/3  mr-10 text-right text-light-white ">
        <LanguageDropdown />
        <LocationDropdown />
      </div>
    </footer>
  );
};

export default Header;
