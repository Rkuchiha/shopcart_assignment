import React, { useState } from "react";
import DownArrowIcon from "../../assets/icons/downArrow";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-transparent text-white py-2 px-4 font-semibold hover:border-transparent flex items-center"
      >
        {selectedLanguage} <DownArrowIcon />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-green-950 border border-gray-300 rounded shadow-lg">
          <button
            onClick={() => handleLanguageChange("English")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("Spanish")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Spanish
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
