import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  ProductDetailPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProfilePage,
  DoctorCreatePage,
  DoctorLoginPage,
  EmployeeActivationPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadDoctor, loadUser } from "./redux/actions/user.js";
import Store from "./redux/store.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { DoctorHomePage } from "./DoctorRoutes.js";
import DoctorProtectedRoute from "./DoctorProtectedRoute.js";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isDoctor, doctor } = useSelector((state) => state.doctor);
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadDoctor());

    if (isDoctor === true) {
      return <Navigate to="/doctor" replace />;
    }
  }, []);
  console.log(isDoctor, doctor);

  return (
    <>
      {loading || isLoading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/doctor/activation/:activation_token"
              element={<EmployeeActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/** Shop */}
            <Route path="/doctor-create" element={<DoctorCreatePage />} />
            <Route path="/doctor-login" element={<DoctorLoginPage />} />
            <Route
              path="/employee/:id"
              element={
                <DoctorProtectedRoute isDoctor={isDoctor}>
                  <DoctorHomePage />
                </DoctorProtectedRoute>
              }
            />
            {/**Bọc ProfilePage bên trong ProtectedRout để kiểm tra đăng nhập */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2900}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
