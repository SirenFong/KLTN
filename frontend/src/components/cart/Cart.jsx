import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Vi Sinh Obinic",
      description: "Test",
      price: "38000đ",
    },
    {
      name: "Vi Sinh Obinic",
      description: "Test",
      price: "38000đ",
    },
    {
      name: "Vi Sinh Obinic",
      description: "Test",
      price: "38000đ",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/**Tiêu đề */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[25px] font-[500]">
              3 Sản phẩm trong giỏ
            </h5>
          </div>
          {/**Danh sách sản phẩm */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
            >
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Thanh toán (500.000đ)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = (parseFloat(data.price) * value).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0, // Set to the desired number of decimal places
    maximumFractionDigits: 0, // Set to the desired number of decimal places
  });

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <hr />
          <span className="pl-[8px]">{value}</span>
          <hr />
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <br />
        <br />
        <img
          src="https://res.cloudinary.com/djxsh5hhw/image/upload/v1668624510/cld-sample-5.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            Đơn giá:{" "}
            {data.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}{" "}
            * {value}
          </h4>

          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            Thành tiền: {totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointe" />
      </div>
    </div>
  );
};
export default Cart;
