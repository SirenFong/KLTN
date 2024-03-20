import React from "react";
import styles from "../../styles/styles";
import EmployeeInfo from "../../components/Employee/EmployeeInfo";
import EmployeeProfileData from "../../components/Employee/EmployeeProfileData";

const DoctorHomePage = () => {
  return (
    <div className={`${styles.section}  bg-[#f5f5f5]`}>
      <div className="w-full flex py-10 justify-between">
        <div className="w-[25%] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
          <EmployeeInfo isOwner={true} />
        </div>
        <div className="w-[72%] rounded-[4px]">
          <EmployeeProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default DoctorHomePage;
