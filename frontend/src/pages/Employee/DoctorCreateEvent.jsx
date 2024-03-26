import React from "react";
import DashboardHeader from "../../components/Employee/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Employee/Layout/DashboardSideBar";
import CreateEvent from "../../components/Employee/CreateEvent";

const DoctorCreateEvent = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={6} />
        </div>  
        <div className="w-full justify-center flex">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default DoctorCreateEvent;
