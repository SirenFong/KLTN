import { Navigate } from "react-router-dom";

//Kiểm tra xem tài khoản có đăng nhập không, nếu không thì sẽ ngăn cản người dùng
const DoctorProtectedRoute = ({ isDoctor, children }) => {
  if (!isDoctor) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default DoctorProtectedRoute;
