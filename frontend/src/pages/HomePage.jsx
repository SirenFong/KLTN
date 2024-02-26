import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Route/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import { FaArrowCircleUp } from "react-icons/fa";

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const arrowStyles = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "1000",
    cursor: "pointer",
    fontSize: "36px",
    color: "#000",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    display: showScroll ? "block" : "none",
  };

  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <div style={arrowStyles} onClick={scrollTop}>
        <FaArrowCircleUp />
      </div>
      <br />
      <Events />
      <FeaturedProduct />
      {/**Gợi ý sản phẩm */}
      {/**Tin tức */}
      <br />
      <Sponsored />

      <Footer />
    </div>
  );
};

export default HomePage;
