import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/djxsh5hhw/image/upload/v1703686408/20773_yngarp.jpg)",
        // backgroundSize: "cover", // Thêm thuộc tính kích thước ảnh nền
        // backgroundPosition: "center", // Đặt ảnh ở trung tâm phần nền
        // backgroundRepeat: "no-repeat", // Ngăn chặn ảnh lặp lại
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Đồ dùng y tế <br />
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.
        </p>
        <Link to="/product" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Mua ngay !!
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
