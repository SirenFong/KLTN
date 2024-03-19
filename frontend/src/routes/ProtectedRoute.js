import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Kiểm tra xem tài khoản có đăng nhập không, nếu không thì sẽ ngăn cản người dùng
const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }
};

export default ProtectedRoute;
