import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
// import { useDispatch, useSelector } from "react-redux";
import { LuHeartPulse } from "react-icons/lu";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import { toast } from "react-toastify";

const ProductDetailsCard = ({ setOpen, data }) => {
  // const { cart } = useSelector((state) => state.cart);
  // const { wishlist } = useSelector((state) => state.wishlist);
  // const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
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

  //   const [select, setSelect] = useState(false);

  const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  // const addToCartHandler = (id) => {
  //   const isItemExists = cart && cart.find((i) => i._id === id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (data.stock < count) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...data, qty: count };
  //       // dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (wishlist && wishlist.find((i) => i._id === data._id)) {
  //     setClick(true);
  //   } else {
  //     setClick(false);
  //   }
  // }, [wishlist]);

  // const removeFromWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(removeFromWishlist(data));
  // };

  // const addToWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(addToWishlist(data));
  // };
  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[35%]">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Đánh giá
                    </h5>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Tư vấn với dược sỹ <LuHeartPulse className="ml-2" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  Đã bán ({data.total_sell})
                </h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.name}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    Giá: {formattedPrice}
                  </h4>
                  {/* <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "đ" : null}
                  </h3> */}
                  <h3 className={`${styles.price}`}>
                    {formattedOriginalPrice}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-[#3bc177] text-white rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>

                    <span className="rounded-l bg-gray-200 text-gray-800 font-medium px-4 py-[10px] mr-1 ml-1">
                      {count}
                    </span>

                    <button
                      className="bg-[#3bc177] text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Xóa khỏi danh sách yêu thích"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => addToWishlistHandler(data)}
                        title="Thêm vào danh sách yêu thích"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                  // onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-[#fff] flex items-center">
                    Chọn mua <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
