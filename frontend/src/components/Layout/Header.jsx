import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  // const [open, setOpen] = useState(false);

  console.log(user);

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const formattedTerm = removeAccents(term.toLowerCase());

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        removeAccents(product.name.toLowerCase()).includes(formattedTerm)
      );

    setSearchData(filteredProducts);
  };

  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchData(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden md:flex items-center justify-between h-20 my-4">
          <div>
            <Link to="/">
              <img
                // src="https://res.cloudinary.com/dgtostoep/image/upload/v1702622963/Logo_slhmcr.png"
                // src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                src="https://res.cloudinary.com/dgtostoep/image/upload/v1702905710/imgonline-com-ua-resize-kyOORaMPjDUL_1_at1rmh.jpg"
                alt=""
                style={{ width: "auto", height: "auto", marginTop: "10px" }}
              />
            </Link>
          </div>

          {/**Search */}
          <div className="w-[50%] relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Nhập sản phẩm cần tìm..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-10 w-full px-2 border-2 border-blue-500 rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-30vh bg-gray-100 shadow-sm z-10 p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link to={`/product/${product_name}`} key={index}>
                        <div className="w-full flex items-center py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-10 h-10 mr-2 rounded-full"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to="/doctor-login">
              <h1 className="text-[#fff] flex items-center">
                Kênh người bán <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#63bda4] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/*category*/}
          <div
            className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
            onMouseEnter={() => {
              setTimeout(() => {
                setDropDown(true);
              }, 200);
            }}
            onMouseLeave={() => setDropDown(false)}
          >
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md ${
                dropDown ? "open" : ""
              }`}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              Danh mục
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                style={{
                  visibility: dropDown ? "hidden" : "visible",
                }}
                onClick={() => setDropDown(!dropDown)}
              />
              <IoIosArrowUp
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                style={{
                  visibility: dropDown ? "visible" : "hidden",
                }}
                onClick={() => setDropDown(!dropDown)}
              />
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  opacity: dropDown ? "1" : "0",
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              ></span>
            </button>
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>

          {/**navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  0
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>
            {/**Cart */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/**Wishlist */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
