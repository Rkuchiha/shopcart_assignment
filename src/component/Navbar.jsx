import React from "react";
import Logo from "../assets/images/orebiLogo.png";
const Navbar = ({ onCategoryChange }) => {
  const handleCategorySelect = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <nav className="flex items-center justify-between bg-light-white-100 p-4 ml-10">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Logo" className="w-12 mr-4" />

        <div className="flex  items-center space-x-10 cursor-pointer border-none">
          <select onChange={handleCategorySelect}>
            <option value="all">Select a category</option>
            <option value="accessories">Accessories</option>
            <option value="furniture">Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
            <option value="bags">Bags</option>
            <option value="home_appliances">Home appliances</option>
          </select>
        </div>
        <div className="space-x-10 flex list-none">
          <a>Deals</a>
          <li>What's New</li>
          <li>Delivery</li>
        </div>
      </div>

      <div className="relative inline-block">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative inline-block">
          <img src="cart.svg" alt="Cart" className="w-6 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-500 text-xs text-white rounded-full">
            0
          </span>
        </div>
        <a href="#" className="text-gray-800 hover:text-gray-600">
          Cart
        </a>

        <img src="account.svg" alt="Cart" className="w-6 cursor-pointer" />
        <a href="#" className="text-gray-800 hover:text-gray-600">
          Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
