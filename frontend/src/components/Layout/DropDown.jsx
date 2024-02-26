import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();

  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div
      className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm"
      style={{ border: "1px solid #ccc", borderRadius: "8px" }}
    >
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex} hover:bg-gray-100 cursor-pointer`}
            onClick={() => submitHandle(i)}
            style={{
              borderBottom: "1px solid #ccc",
              padding: "8px 10px", // Điều chỉnh padding của mỗi mục danh mục
              transition: "background-color 0.3s ease",
              color: "black", // Màu chữ
            }}
          >
            <img
              src={i.image_Url}
              style={{
                width: "20px", // Kích thước ảnh
                height: "20px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none text-sm">
              {i.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
