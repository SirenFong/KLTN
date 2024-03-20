import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { HiOutlineReceiptRefund } from "react-icons/hi";
const DashboardSideBar = ({ active }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const sidebarStyle = {
    width: "100%",
    height: "89vh",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    overflowY: isHovered ? "scroll" : "hidden",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 10,
  };
  return (
    <div
      className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10"
      style={sidebarStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/**Dashboard */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      {/**Đơn hàng */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Đơn hàng
          </h5>
        </Link>
      </div>

      {/**Sản phẩm */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={`${active === 3 ? "#4aa5b4" : "#555"}`} />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Sản phẩm
          </h5>
        </Link>
      </div>

      {/**Tạo Sản phẩm */}
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Tạo Sản phẩm
          </h5>
        </Link>
      </div>

      {/**Sự kiện */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Sự kiện
          </h5>
        </Link>
      </div>

      {/**Tạo Sự kiện */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Tạo Sự kiện
          </h5>
        </Link>
      </div>

      {/**Tạo Sự kiện */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-withdraw" className="w-full flex items-center">
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Thu tiền
          </h5>
        </Link>
      </div>

      {/**Tin nhắn */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-inbox" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Tin nhắn
          </h5>
        </Link>
      </div>

      {/**Bài viết */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-new" className="w-full flex items-center">
          <SlBookOpen
            size={30}
            color={`${active === 9 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Bài viết
          </h5>
        </Link>
      </div>

      {/**Mã giảm giá */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard/coupons" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 10 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Mã giảm giá
          </h5>
        </Link>
      </div>

      {/**Mã giảm giá */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard/coupons" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 11 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Đơn hoàn trả
          </h5>
        </Link>
      </div>

      {/**Mã giảm giá */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-setting" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 12 ? "#4aa5b4" : "#555"}`}
          />
          <h5
            className={`pl-2 text-[18px] font-[400] ${
              active === 12 ? "text-[#4aa5b4]" : "text-[#555]"
            }`}
          >
            Cài đặt
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
