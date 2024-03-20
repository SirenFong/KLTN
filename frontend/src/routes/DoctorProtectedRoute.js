import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Kiểm tra xem tài khoản có đăng nhập không, nếu không thì sẽ ngăn cản người dùng
const DoctorProtectedRoute = ({ children }) => {
  const { isLoading, isDoctor } = useSelector((state) => state.doctor);

  if (isLoading === false) {
    if (!isDoctor) {
      return <Navigate to="/doctor-login" replace />;
    }
    return children;
  }
};

export default DoctorProtectedRoute;
