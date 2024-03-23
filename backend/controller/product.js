const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const router = express.Router();
const Product = require("../model/product");
const Employee = require("../model/employee");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");

//Tạo sản phẩm mới
router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const employeeId = req.body.employeeId;
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return next(new ErrorHandler("Mã nhân viên không tồn tại", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrls;
        productData.employee = employee;

        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

//Tải danh sách sản phẩm cửa hàng
router.get(
  "/get-all-products-employee/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ employeeId: req.params.id });

      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
