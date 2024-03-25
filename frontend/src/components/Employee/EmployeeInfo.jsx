import React from "react";
import { useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import styles from "../../styles/styles";
import axios from "axios";

const EmployeeInfo = ({ isOwner }) => {
  const { doctor } = useSelector((state) => state.doctor);

  const logoutHandler = async () => {
    axios.get(`${server}/employee/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };
  return (
    <div>
      <div className="w-full py-5">
        <div className="w-full flex item-center justify-center">
          <img
            src={`${backend_url}${doctor?.avatar}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{doctor.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
          {doctor.description}
        </p>
      </div>
      {/**Địa chỉ */}
      <div className="p-3">
        <h5 className="font-[600]">Địa chỉ</h5>
        <h4 className="text-[#000000a6]">{doctor.address}</h4>
      </div>

      {/**Số điện thoại */}
      <div className="p-3">
        <h5 className="font-[600]">Hotline</h5>
        <h4 className="text-[#000000a6]">
          +84{doctor.phoneNumber.toLocaleString()}
        </h4>
      </div>

      {/**Tổng số lượng sản phẩm */}
      <div className="p-3">
        <h5 className="font-[600]">Số lượng sản phẩm</h5>
        <h4 className="text-[#000000a6]">15 Sản phẩm</h4>
      </div>

      {/**Tổng số đánh giá*/}
      <div className="p-3">
        <h5 className="font-[600]">Đánh giá</h5>
        <h4 className="text-[#000000a6]">5/5 (325 đánh giá)</h4>
      </div>
      {isOwner && (
        <div className="py-3 px-4">
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
            <span className="text-white">Chỉnh sửa cửa hàng</span>
          </div>
          <div
            className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
            onClick={logoutHandler}
          >
            <span className="text-white">Đăng xuất</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeInfo;
