import React from "react";
import DashboardHeader from "../../components/Employee/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Employee/Layout/DashboardSideBar";
import EditProduct from "../../components/Employee/EditProduct";

const DoctorEditProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <EditProduct />
        </div>
      </div>
    </div>
  );
};

export default DoctorEditProduct;
