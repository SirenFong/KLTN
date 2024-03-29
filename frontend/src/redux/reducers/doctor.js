import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const doctorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadDoctorRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("LoadDoctorSuccess", (state, action) => {
      state.isDoctor = true;
      state.isLoading = false;
      state.doctor = action.payload;
    })
    .addCase("LoadDoctorFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isDoctor = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
  // .addCase('clearMessages', (state) => {
  //   state.successMessage = null;
  // });
});
