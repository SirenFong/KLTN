import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
// import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10); // Số lượng sản phẩm hiển thị ban đầu

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
    window.scrollTo(0, 0);
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8); // Tăng số lượng sản phẩm hiển thị khi nhấp vào "Xem thêm"
  };

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data &&
            data
              .slice(0, visibleProducts)
              .map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length > visibleProducts ? (
          <div className="text-center">
            <button
              className={`${styles.loadMoreButton} bg-[#333] text-white py-2 px-4 rounded-md`}
              onClick={handleLoadMore}
            >
              Xem thêm
            </button>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default BestSellingPage;
