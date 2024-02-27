/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState } from "react";
import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { MdTrackChanges } from "react-icons/md";

const ProfileContent = ({ active }) => {
  //Tạo biến user để lấy thông tin người dùng khi đăng ký
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  //Bắt đầu với underfind
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  //Khởi tạo với chuỗi rỗng
  const [address1, setAddress1] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  //
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/**Trang cá nhân */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Họ và tên</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Địa chỉ E-mail</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Số điện thoại</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Zipcode</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Địa chỉ</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    value={address1}
                    placeholder="Nhập địa chỉ cụ thể"
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[50%]">
                  <label className="block pb-2">Thêm ghi chú</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    value={ghiChu}
                    placeholder="Ví dụ: Hãy gọi trước khi giao"
                    onChange={(e) => setGhiChu(e.target.value)}
                  />
                </div>
              </div>

              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Cập nhật"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/** Lịch sử mua hàng */}
      {active === 2 && (
        <div>
          <AllOrder />
        </div>
      )}
      {/* Lịch sử hoàn trả */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Theo dõi đơn hàng */}
      {active === 4 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Theo dõi đơn hàng */}
      {active === 6 && (
        <div>
          <PaymentMethod />
        </div>
      )}

      {/* Địa chỉ đã lưu */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

//Lấy toàn bộ hóa đơn
const AllOrder = () => {
  const orders = [
    {
      _id: "8374781vhdjjajwh83372",
      orderItems: [
        {
          name: "Thuốc trợ tim",
        },
      ],
      totalPrice: 300000,
      orderStatus: "Đang kiểm hàng",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao hàng"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "VNĐ",
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

//
//

//Lấy toàn bộ đơn trả hàng
const AllRefundOrders = () => {
  const orders = [
    {
      _id: "8374781vhdjjajwh83372",
      orderItems: [
        {
          name: "Thuốc trợ tim",
        },
      ],
      totalPrice: 300000,
      orderStatus: "Đang kiểm hàng",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao hàng"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "VNĐ",
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

//
//

//Lấy toàn bộ tình trạng đơn đang đặt
const TrackOrder = () => {
  const orders = [
    {
      _id: "8374781vhdjjajwh83372",
      orderItems: [
        {
          name: "Thuốc trợ tim",
        },
      ],
      totalPrice: 300000,
      orderStatus: "Đang kiểm hàng",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã giao hàng"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Số lượng",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Tổng tiền",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  //Nhớ xóa .cache là được
  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: item.totalPrice + "VNĐ",
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

//
//

//Lấy toàn bộ hình thức thanh toán
const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Phương thức:
        </h1>
        <div className={`${styles.button} rounded-md`}>
          <span className="text-[#fff]">Thêm mới</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-[600]">TRAN THAI THANH</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="font-[400]">**** **** **** 8029</h6>
          <h5 className="pl-6 font-[400]">05/2025</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

//
//

//Lấy toàn bộ hình thức thanh toán
const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          Địa chỉ đã lưu
        </h1>
        <div className={`${styles.button} rounded-md`}>
          <span className="text-[#fff]">Thêm mới</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <h5 className="pl-5 font-[600]">Mặc định</h5>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="font-[400]">81/15 Phùng Văn Cung, P2, Q.Phú Nhuận</h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="font-[400]">+84 707849427</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
