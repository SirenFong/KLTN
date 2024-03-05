import React, { useEffect } from "react";
import DoctorLogin from "../components/Employee/DoctorLogin";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const DoctorLoginPage = () => {
  const navigate = useNavigate();
  const { isDoctor, doctor } = useSelector((state) => state.doctor);
  useEffect(() => {
    if (isDoctor === true) {
      navigate(`/employee/${doctor._id}`);
    }
  }, [isDoctor, doctor, navigate]);
  return (
    <div>
      <DoctorLogin />
    </div>
  );
};

export default DoctorLoginPage;
