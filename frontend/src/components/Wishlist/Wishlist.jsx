// import React, { useState } from "react";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import { IoHeart } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường tiêu hóa (5ml)",
      description: "Test",
      price: "38000đ",
    },
    {
      name: "Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường tiêu hóa (5ml)",
      description: "Test",
      price: "38000đ",
    },
    {
      name: "Men vi sinh BioGaia Protectis Baby Drops bổ sung lợi khuẩn cho đường tiêu hóa (5ml)",
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
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          <div className={`${styles.noramlFlex} p-4`}>
            <IoHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[600]">Sản phẩm yêu thích</h5>
          </div>
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  return (
    <div className="border-b p-4">
      <div className="w-full 800px:flex items-center">
        <div
          className={`bg-[#fd2121] border border-[#e4434373] rounded-full w-[30px] h-[30px] ${styles.noramlFlex} justify-center cursor-pointer`}
        >
          <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-0 ml-0" />
        </div>

        <img
          src="https://res.cloudinary.com/djxsh5hhw/image/upload/v1668624510/cld-sample-5.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />

        <div className="pl-[10px]">
          <h1 className="font-[400] text-[15px] mb-2">{data.name}</h1>
          <div className="pl-[5px]">
            <button className="bg-[#e44343] text-white text-[15px] font-[600] py-1 px-2 rounded">
              <BsCartPlus size={20} className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
