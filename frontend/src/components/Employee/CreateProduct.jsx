import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";

const CreateProduct = () => {
  const { doctor } = useSelector((state) => state.doctor);
  const navigate = useState();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Tạo sản phẩm</h5>
      {/**Tạo form sản phẩm */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Tên sản phẩm <spam className="text-red-500">*</spam>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên sản phẩm..."
          />
        </div>
        <div>
          <label className="pb-2">
            Mô tả sản phẩm <spam className="text-red-500">*</spam>
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập mô tả sản phẩm..."
          />
        </div>
        <div>
          <label className="pb-2">
            Danh mục <spam className="text-red-500">*</spam>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Chọn danh mục sản phẩm">
              Chọn danh mục sản phẩm
            </option>
            {categoriesData.map((i) => (
              <option value={i.title} key={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
