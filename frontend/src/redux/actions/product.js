import axios from "axios";
import { server } from "../../server";

// Tạo sản phẩm
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Lấy tất cả sản phẩm của một cửa hàng
export const getAllProductsEmployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsEmployeeRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-employee/${id}`
    );
    dispatch({
      type: "getAllProductsEmployeeSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsEmployeeFailed",
      payload: error.response.data.message,
    });
  }
};

// Xóa sản phẩm của một cửa hàng
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-Employee-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};

// Lấy tất cả sản phẩm
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};
