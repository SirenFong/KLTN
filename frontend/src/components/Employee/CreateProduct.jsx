import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
  const { doctor } = useSelector((state) => state.doctor);
  const navigate = useState();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [vat, setVat] = useState("");
  const [stock, setStock] = useState("");
  const [fileKey, setFileKey] = useState(0);

  // Tính toán giá bán dựa trên giá nhập và % thuế
  const calculateSellPrice = () => {
    const vatDecimal = parseFloat(vat) / 100;
    const originalPriceFloat = parseFloat(originalPrice);
    const sellPriceValue = originalPriceFloat + originalPriceFloat * vatDecimal;
    setSellPrice(sellPriceValue.toFixed(2)); // Giữ 2 chữ số sau dấu phẩy
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
    setFileKey((prevKey) => prevKey + 1);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

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
        <br />
        <div>
          <label className="pb-2">
            Mô tả sản phẩm <spam className="text-red-500">*</spam>
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập mô tả sản phẩm..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Tags <spam className="text-red-500">*</spam>
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Nhập tag sản phẩm..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Giá nhập <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="originalPrice"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => {
              setOriginalPrice(e.target.value);
              calculateSellPrice(); // Tính toán giá bán khi giá nhập thay đổi
            }}
            placeholder="Nhập giá sản phẩm..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Thuế sản phẩm (%)</label>
          <input
            type="text"
            name="vat"
            value={vat}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => {
              setVat(e.target.value);
              calculateSellPrice(); // Tính toán giá bán khi % thuế thay đổi
            }}
            placeholder="Nhập % thuế sản phẩm..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Giá bán{" "}
            <span className="text-red-500">
              (Giá bán sẽ được tự động tính bằng giá nhập * % thuế)
            </span>
          </label>
          <input
            type="text"
            name="sellPrice"
            value={sellPrice.toLocaleString()}
            readOnly // Đảm bảo giá bán chỉ được hiển thị và không thể chỉnh sửa
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Tồn kho <spam className="text-red-500">*</spam>
          </label>
          <input
            type="text"
            name="stock"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Nhập tồn kho sản phẩm..."
          />
        </div>
        <br />

        <div>
          <label className="pb-2">
            Hình ảnh <span className="text-red-500">*</span>
          </label>
          <input
            key={fileKey}
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple // Cho phép chọn nhiều tệp tin
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="h-[120px] w-[120px] object-cover m-2"
                  />
                  <AiOutlineCloseCircle
                    size={20}
                    className="absolute top-0 right-0 cursor-pointer"
                    onClick={() => removeImage(index)}
                  />
                </div>
              ))}
          </div>
          <div>
            <input
              type="submit"
              value="Tạo sản phẩm"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
