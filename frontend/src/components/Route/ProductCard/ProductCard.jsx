import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
   
  // const handleCopyText = (text) => {
  //   navigator.clipboard.writeText(text);
  // };
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(data.discount_price);
  const formattedOriginalPrice = data.price
    ? new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(data.price)
    : null;

  return (
    <>
      <div className="w-full h-[390px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link to="/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="F6BA00"
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              size={20}
              color="F6BA00"
            />
            <AiOutlineStar
              className="mr-2 cursor-pointer"
              size={20}
              color="F6BA00"
            />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {formattedPrice}
              </h5>
              <h4 className={`${styles.price}`}>{formattedOriginalPrice}</h4>
            </div>
          </div>

          <div className="flex justify-between">
            <h5 className="flex justify-start">{data.specifications}</h5>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.total_sell} đã bán
            </span>
          </div>
        </Link>
        {/**side option */}

        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Xóa khỏi danh sách yêu thích"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Thêm vào yêu thích"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Xem nhanh"
          />

          <AiOutlineShoppingCart
            size={22}
            className="cursor-pointer absolute right-2 top-24"
            // onClick={() => setOpen(!open)}
            color="#444"
            title="Thêm vào giỏ"
          />

          {open ? (
            <ProductDetailsCard open={open} setOpen={setOpen} data={data} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
