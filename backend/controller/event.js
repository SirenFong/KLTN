const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Employee = require("../model/employee");
const Event = require("../model/event");
const { upload } = require("../multer");
const router = express.Router();
const { isDoctor } = require("../middleware/auth");

//Tạo sản phẩm mới
router.post(
  "/create-event",
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

        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.employee = employee;

        const product = await Event.create(eventData);
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

//Tải danh sách sự kiện cửa hàng
router.get(
  "/get-all-events/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const events = await Event.find({ employeeId: req.params.id });

      res.status(201).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

//Xóa sản phẩm
router.delete(
  "/delete-event/:id",
  isDoctor,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const event = await Event.findByIdAndDelete(productId);

      if (!event) {
        return next(new ErrorHandler("Không tìm thấy sự kiện để xóa!!!", 500));
      }

      res.status(201).json({
        success: true,
        message: "Xóa thành công!!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
