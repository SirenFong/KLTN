import React from "react";
import DashboardHeader from "../../components/Employee/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Employee/Layout/DashboardSideBar";

const DoctorDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[100px] 800px:w-[330px]">
          <DashboardSideBar active={1} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardPage;
