import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "./routes/Routes.js";
import {
  DoctorDashboardPage,
  DoctorCreateProduct,
  DoctorCreateEvent,
  DoctorAllProduct,
  DoctorAllEvents,
} from "./routes/DoctorRoutes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadDoctor, loadUser } from "./redux/actions/user.js";
import Store from "./redux/store.js";
import { DoctorHomePage } from "./DoctorRoutes.js";
import DoctorProtectedRoute from "./routes/DoctorProtectedRoute.js";
import ProtectedRoute from "./routes/ProtectedRoute.js";

const App = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadDoctor());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/**  */}
        <Route path="/login" element={<LoginPage />} />
        {/**  */}
        <Route path="/sign-up" element={<SignupPage />} />
        {/**  */}
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        {/**  */}
        <Route
          path="/doctor/activation/:activation_token"
          element={<EmployeeActivationPage />}
        />
        <Route path="/products" element={<ProductsPage />} />
        {/**  */}
        <Route path="/product/:name" element={<ProductDetailPage />} />
        {/**  */}
        <Route path="/best-selling" element={<BestSellingPage />} />
        {/**  */}
        <Route path="/events" element={<EventsPage />} />
        {/**  */}
        <Route path="/faq" element={<FAQPage />} />

        {/** Shop */}
        <Route path="/doctor-create" element={<DoctorCreatePage />} />
        {/**  */}
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        {/**  */}
        <Route
          path="/employee/:id"
          element={
            <DoctorProtectedRoute>
              <DoctorHomePage />
            </DoctorProtectedRoute>
          }
        />
        {/** Dashboard */}
        <Route
          path="/dashboard"
          element={
            <DoctorProtectedRoute>
              <DoctorDashboardPage />
            </DoctorProtectedRoute>
          }
        />
        {/** Dashboard create */}
        <Route
          path="/dashboard-create-product"
          element={
            <DoctorProtectedRoute>
              <DoctorCreateProduct />
            </DoctorProtectedRoute>
          }
        />
        {/**Dashboard create event */}
        <Route
          path="/dashboard-create-event"
          element={
            <DoctorProtectedRoute>
              <DoctorCreateEvent />
            </DoctorProtectedRoute>
          }
        />
        {/**Dashboard all event */}
        <Route
          path="/dashboard-events"
          element={
            <DoctorProtectedRoute>
              <DoctorAllEvents />
            </DoctorProtectedRoute>
          }
        />
        {/** Dashboard get all */}
        <Route
          path="/dashboard-products"
          element={
            <DoctorProtectedRoute>
              <DoctorAllProduct />
            </DoctorProtectedRoute>
          }
        />
        {/**Bọc ProfilePage bên trong ProtectedRout để kiểm tra đăng nhập */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/** Thông báo */}
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
  );
};

export default App;
