import React from "react";

const ProductCard = ({ title, color, price, imageSrc }) => {
  return (
    <div className=" p-4 bg-gradient-to-br to-gray-200 from-white border border-gray-200 shadow-md rounded-sm m-10 cursor-pointer">
      <div className=" w-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full rounded-lg"
        />
      </div>

      <div className="p-2 rounded-lg mt-2 hover:">
        <div className=" text-left">
          <h2 className="text-lg font-bold text-black">{title}</h2>
          {color}
          <p className="mt-4 text-xl font-semibold">${price}</p>
        </div>

        <div className=" text-right">
          <a
            href="#_"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-200 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Add to Cart
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
