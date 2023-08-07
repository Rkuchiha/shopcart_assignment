import React from "react";
import Slider from "react-slick";
import IMG1 from "../assets/images/banner/bannerImgOne.webp";
import IMG2 from "../assets/images/banner/bannerImgTwo.webp";
import IMG3 from "../assets/images/banner/bannerImgThree.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Image from "../component/designLayouts/Image.js";
const EcommerceBanner = () => {
  const images = [
    IMG1,
    IMG2,
    IMG3,
    // Add more image paths here
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          className="banner bg-cover bg-center text-white flex flex-col justify-center items-center"
        >
          <Link to="/offer">
            <div>
              <Image imgSrc={image} />
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default EcommerceBanner;
