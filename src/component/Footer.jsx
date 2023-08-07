import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import FooterListTitle from "./comps/FooterListTitle";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Orebi Shop" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a href="" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor bg-gray text-white hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/Rkuchiha"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor bg-gray text-white hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/rajnish-kapile-5142b61b4"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor bg-gray text-white hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/rajnish-kapile-5142b61b4"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor bg-gray text-white hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Accesories
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Clothes
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Electronics
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Home appliances
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Payment Options
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-10 bg-[#F5F5F3] group">
        <div className="border-t-[1px] pt-10">
          <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
            <span className="text-md md:mt-0 text-center hidden md:inline-flex">
              <AiOutlineCopyright />
            </span>
            Copyright 2023 | ShopCart shopping | All Rights Reserved |
            <a
              href="https://rkuchiha.github.io/My-Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="ml-1 font-medium group-hover:text-primeColor">
                Powered by Rkuchiha47.com
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
