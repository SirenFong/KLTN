import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { createEvent } from "../../redux/actions/event";

const CreateEvent = () => {
  const { doctor } = useSelector((state) => state.doctor);
  const { success, error } = useSelector((state) => state.events);
  //
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  //
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  //
  const [stock, setStock] = useState("");
  const [tags, setTags] = useState("");
  //Event Date
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  //
  const [specifications, setSpecifications] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [fileKey, setFileKey] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  //
  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate
      .toISOString()
      .slice(0, 10);
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };

  const today = new Date().toISOString().slice(0, 10);

  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : "";

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Sự kiện được tạo thành công!");
      navigate("/dashboard-events");
      window.location.reload();
    }
  }, [dispatch, error, navigate, success]);
  //

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Thành công!");
      navigate("/dashboard-products");
      // window.location.reload();
    }
  }, [dispatch, error, navigate, success]);

  const calculateSellPrice = () => {
    // Chuyển đổi giá nhập và % giảm giá sang kiểu số
    const originalPriceFloat = parseFloat(originalPrice);
    const discountPercentFloat = parseFloat(discountPercent);

    // Kiểm tra xem giá nhập và % giảm giá có hợp lệ không
    if (!isNaN(originalPriceFloat) && !isNaN(discountPercentFloat)) {
      // Tính toán giá sau khi giảm
      const discountedPrice =
        originalPriceFloat - (originalPriceFloat * discountPercentFloat) / 100;
      // Cập nhật state của giá sau khi giảm
      setSellPrice(discountedPrice.toFixed(2)); // Giữ 2 chữ số sau dấu phẩy
    } else {
      // Nếu giá nhập hoặc % giảm giá không hợp lệ, đặt giá sau khi giảm là rỗng
      setSellPrice("");
    }
  };

  // Thay đổi giá nhập
  const handleOriginalPriceChange = (e) => {
    const price = e.target.value;
    setOriginalPrice(price);
    calculateSellPrice();
  };

  // Thay đổi % giảm giá
  const handleDiscountPercentChange = (e) => {
    const percent = e.target.value;
    setDiscountPercent(percent);
    calculateSellPrice();
  };

  // Thêm hàm định dạng tiền tệ của Việt Nam
  const formatCurrency = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  //
  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
    setFileKey((prevKey) => prevKey + 1);
  };

  //Xóa hình ảnh theo index
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("origin", origin);
    newForm.append("start_Date", startDate.toISOString());
    newForm.append("end_Date", endDate.toISOString());
    newForm.append("quantity", quantity);
    newForm.append("specifications", specifications);
    newForm.append("unit", unit);
    newForm.append("weight", weight);
    newForm.append("material", material);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPercent", discountPercent);
    newForm.append("sellPrice", sellPrice);
    newForm.append("stock", stock);
    newForm.append("employeeId", doctor._id);
    dispatch(createEvent(newForm));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="w-[100%] 800px:w-[90%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Tạo sự kiện</h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Danh mục <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Chọn danh mục sản phẩm</option>
            {categoriesData.map((i) => (
              <option value={i.title} key={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
        <br />
        {selectedCategory === "Thiết bị y tế" ? (
          <>
            <div>
              <label className="pb-2">
                Tên sản phẩm <span className="text-red-500">*</span>
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
                Mô tả sản phẩm <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="30"
                required
                rows="8"
                type="text"
                name="description"
                value={description}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả sản phẩm..."
              ></textarea>
            </div>
            <br />
            <label className="pb-2">
              Ngày bắt đầu sự kiện <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="start_date"
              id="start-date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleStartDateChange}
              min={today}
              placeholder="Nhập ngày "
            />
            <br />
            <div>
              <label className="pb-2">
                Ngày kết thúc sự kiện <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="end_date"
                id="end-date"
                value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleEndDateChange}
                min={minEndDate}
                placeholder="Enter your event product stock..."
              />
            </div>
            <br />
            <div>
              <label className="pb-2">
                Số lượng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quantity"
                value={quantity}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Nhập số lượng sản phẩm..."
              />
            </div>
            <br />
            <div>
              <label className="pb-2">
                Trọng lượng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="weight"
                value={weight}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Trọng lượng (g)"
              />
            </div>
            <br />
            <div>
              <label className="pb-2">
                Vật liệu <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="material"
                value={material}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setMaterial(e.target.value)}
                placeholder="Vật liệu"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="pb-2">
                Tên sản phẩm <span className="text-red-500">*</span>
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
                Mô tả sản phẩm <span className="text-red-500">*</span>
              </label>
              <textarea
                cols="30"
                required
                rows="8"
                type="text"
                name="description"
                value={description}
                className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Nhập mô tả sản phẩm..."
              ></textarea>
            </div>
            <div>
              <label className="pb-2">
                Tags <span className="text-red-500">*</span>
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
            <label className="pb-2">
              Ngày bắt đầu sự kiện <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="start_date"
              id="start-date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleStartDateChange}
              min={today}
              placeholder="Nhập ngày "
            />
            <br />
            <div>
              <label className="pb-2">
                Ngày kết thúc sự kiện <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="end_date"
                id="end-date"
                value={endDate ? endDate.toISOString().slice(0, 10) : ""}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={handleEndDateChange}
                min={minEndDate}
                placeholder="Enter your event product stock..."
              />
            </div>
            <br />
            <div>
              <label className="pb-2">
                Quy cách đóng gói <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="specifications"
                value={specifications}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setSpecifications(e.target.value)}
                placeholder="Quy cách đóng gói"
              />
            </div>

            <br />
            <div>
              <label className="pb-2">
                Đơn vị tính <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="unit"
                value={unit}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setUnit(e.target.value)}
                placeholder="Đơn vị tính"
              />
            </div>

            <br />
            <div>
              <label className="pb-2">
                Số lượng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quantity"
                value={quantity}
                className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Nhập số lượng sản phẩm..."
              />
            </div>
          </>
        )}
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
            onChange={handleOriginalPriceChange}
            placeholder="Nhập giá sản phẩm..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">(%) giảm giá</label>
          <input
            type="text"
            name="discountPercent"
            value={discountPercent}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handleDiscountPercentChange}
            placeholder="Nhập % giảm giá..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Giá sau khi giảm <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sellPrice"
            value={formatCurrency(sellPrice)}
            readOnly // Đảm bảo giá bán chỉ được hiển thị và không thể chỉnh sửa
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Tồn kho <span className="text-red-500">*</span>
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
              value="Chạy sự kiện"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
