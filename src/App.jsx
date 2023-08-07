import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Products from "./component/Products";
import Footer from "./component/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar onCategoryChange={handleCategoryChange} />
        <Banner />
        <Products selectedCategory={selectedCategory} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
