import React, { useEffect } from "react";
import DoctorCreate from "../components/Employee/DoctorCreate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DoctorCreatePage = () => {
  const navigate = useNavigate();
  const { isDoctor, doctor } = useSelector((state) => state.doctor);
  useEffect(() => {
    if (isDoctor === true) {
      navigate(`/employee/${doctor._id}`);
    }
  }, [isDoctor, doctor, navigate]);
  return (
    <div>
      <DoctorCreate />
    </div>
  );
};

export default DoctorCreatePage;
