import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";

const DoctorCreate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // const [zipCode, setZipCode] = useState("");
  const [avatar, setAvatar] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("phoneNumber", phoneNumber);
    newForm.append("address", address);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${server}/employee/doctor-create`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setPhoneNumber();
        setAddress("");
        setEmail("");
        setPassword("");
        setAvatar();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Tạo tài khoản
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/**Tên dược sĩ */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tên dược sĩ
                </label>
                <div className="mt-1">
                  <input
                    type="name"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              {/**số điện thoại */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Số điện thoại
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/**Địa chỉ nhà */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ
                </label>
                <div className="mt-1">
                  <input
                    type="address"
                    name="address"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/**Địa chỉ Emai; */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Địa chỉ Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/**Mật khẩu */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mật khẩu
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              {/**Ảnh đại diện */}
              <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                    {/* {avatar ? (
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )} */}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Tải ảnh đại diện</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              {/**Nút đăng ký */}
              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Đăng ký
                </button>
              </div>

              {/**Nút đăng ký */}
              <div className={`${styles.noramlFlex} w-full`}>
                <h4>Đã có tài khoản?</h4>
                <Link to="/doctor-login" className="text-blue-600 pl-2">
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCreate;
