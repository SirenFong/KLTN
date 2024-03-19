import React, { useEffect } from "react";
import DoctorLogin from "../components/Employee/DoctorLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const DoctorLoginPage = () => {
  const navigate = useNavigate();
  const { isDoctor, isLoading } = useSelector((state) => state.doctor);
  useEffect(() => {
    if (isDoctor === true) {
      navigate(`/dashboad`);
    }
  }, [isDoctor, isLoading]);
  return (
    <div>
      <DoctorLogin />
    </div>
  );
};

export default DoctorLoginPage;
