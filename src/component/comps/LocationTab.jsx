import React, { useState } from "react";
import DownArrowIcon from "../../assets/icons/downArrow";

const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-transparent text-white py-2 px-4 font-semibold hover:border-transparent flex items-center"
      >
        {selectedLocation} <DownArrowIcon />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-green-950 border border-gray-300 rounded shadow-lg">
          <button
            onClick={() => handleLocationChange("India")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            India
          </button>
          <button
            onClick={() => handleLocationChange("USA")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            USA
          </button>
          <button
            onClick={() => handleLocationChange("Japan")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Japan
          </button>
          <button
            onClick={() => handleLocationChange("England")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            England
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
