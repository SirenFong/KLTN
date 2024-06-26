import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { getAllEventsEmployee } from "../../redux/actions/event";

const AllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const { doctor } = useSelector((state) => state.doctor);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsEmployee(doctor._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  const columns = [
    // { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },

    {
      field: "name",
      headerName: "Tên sản phẩm",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Giá giảm",
      minWidth: 100,
      flex: 0.6,
      renderCell: (params) => {
        return (
          <>
            {parseInt(params.value).toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      },
    },
    {
      field: "discountPercent",
      headerName: "(%) giảm giá",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Tồn kho",
      type: "number",
      minWidth: 100,
      flex: 0.1,
    },

    {
      field: "sold",
      headerName: "Đã bán",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Xem sản phẩm",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Xóa Sản Phẩm",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  events &&
    events.forEach((item, index) => {
      row.push({
        // id: index + 1,
        id: item._id,
        name: item.name,
        price: parseInt(item.sellPrice),
        Stock: item.stock,
        sellPrice: item?.sellPrice,
        discountPercent: item?.discountPercent,
        productId: item._id,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllEvents;
