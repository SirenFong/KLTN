import React from "react";
import DashboardHeader from "../../components/Employee/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Employee/Layout/DashboardSideBar";
import AllEvents from "../../components/Employee/AllEvents.jsx";

const DoctorAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={5} />
        </div>
        <div className="w-full justify-center flex">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default DoctorAllEvents;
