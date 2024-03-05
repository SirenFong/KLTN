import axios from "axios";
import { server } from "../../server";

//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

//load doctor
export const loadDoctor = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadDoctorRequest",
    });
    const { data } = await axios.get(`${server}/employee/getDoctor`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadDoctorSuccess",
      payload: data.doctor,
    });
  } catch (error) {
    dispatch({
      type: "LoadDoctorFail",
      payload: error.response.data.message,
    });
  }
};
