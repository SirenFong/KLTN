import axios from "axios";
import { server } from "../../server";

// Tạo sự kiện
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

//Load sự kiện
export const getAllEventsEmployee = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsEmployeeRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "getAlleventsEmployeeSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsEmployeeFailed",
      payload: error.response.data.message,
    });
  }
};
